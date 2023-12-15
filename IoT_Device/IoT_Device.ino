#define BLYNK_TEMPLATE_ID "TMPLI0KzRPO7"
#define BLYNK_TEMPLATE_NAME "Quickstart Template"
#define BLYNK_AUTH_TOKEN "qTPvhl4pDt3QmVAk49vHuxJjbg--wVr1"
#define SOUND_SPEED 0.034

#include <ESP32Servo.h>
#include <BlynkSimpleEsp32.h>
#include <WiFi.h>
#include <WiFiClient.h>

int servoPin = 33;

char ssid[] = "H&"; // Nama wifi
char pass[] = "1sampe8ya"; // Password
Servo myservo;  // create servo object to control a servo
int pos = 0;    // variable to store the servo position
bool isLocked = false;
int counter = 0;
const int trigPin = 32;
const int echoPin = 35;
long duration;
float distanceCm;
SemaphoreHandle_t mutex; // membuat handle mutex


void vTimerTask(void *pvParam) {
  while (1) {
      if (isLocked){ //Jika state == PLAY
  // Membuat string timestamp yang akan di concatenate
        String timestamp = String("Time: "); 
        timestamp += String(counter / 60); // menambahkan satuan menit
        timestamp += ":"; // menambahkan pemisah menit dan detik
        timestamp += String(counter % 60); // menambahkan satuan detik
        Serial.println(timestamp);

        Blynk.virtualWrite(V5, timestamp);
        counter++; // Meng-increment waktu pemutaran
        //jika waktu pemutaran sudah 300 detik (5 menit)
      }else{
        if(counter > 5){
        Blynk.virtualWrite(V5, "Fee: Rp. 3000");
        }else{
        Blynk.virtualWrite(V5, "Fee: Rp. 2000");
        }
        counter = 0;
      }
    vTaskDelay(pdMS_TO_TICKS(1000)); //memberikan delay
  }
}	

// Fungsi callback yang akan dipanggil ketika button lock ditekan
BLYNK_WRITE(V0) {
  if(param.asInt() == 1){
    if(distanceCm <= 5){
      isLocked = true;
      Blynk.virtualWrite(V4, "LOCK");
      myservo.write(90);    // tell servo to go to position in variable 'pos'
      }else{
        isLocked = false;
        Blynk.virtualWrite(V4, "NO MOTOR PARKED"); 
        digitalWrite(25, HIGH);
        digitalWrite(26, HIGH);
        myservo.write(0);    // tell servo to go to position in variable 'pos'
      }
    }else{
      isLocked = false;
      Blynk.virtualWrite(V4, "OPEN");
      digitalWrite(25, LOW);
      digitalWrite(26, LOW);

      myservo.write(0);    // tell servo to go to position in variable 'pos'

  }
}

void vSensorTask(void *pvParam){
  while(1){
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    // Sets the trigPin on HIGH state for 10 micro seconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(echoPin, HIGH);
    // Calculate the distance
    distanceCm = duration * SOUND_SPEED/2;
    vTaskDelay(pdMS_TO_TICKS(100)); //memberikan delay

  }
  

}
void setup() {
  pinMode(25, OUTPUT);
  pinMode(26, OUTPUT);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
	myservo.setPeriodHertz(100);    // standard 50 hz servo
	myservo.attach(servoPin); 
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  xTaskCreatePinnedToCore(vTimerTask, "TimerTask", 10000, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(vSensorTask, "SensorTask", 10000, NULL, 1, NULL, 1);
  mutex = xSemaphoreCreateMutex();
}

void loop() {
  // put your main code here, to run repeatedly:
  Blynk.run();
}
