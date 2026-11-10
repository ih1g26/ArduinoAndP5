#include <Arduino.h>
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Read analogue signal from the sensor
  int sensorValue = analogRead(sensorPin);

  // Convert the reading into centimetres
  float distance = sensorValue * 520.0 / 1023.0;

  // Send distance over serial
  Serial.println(distance);

  delay(50);
}