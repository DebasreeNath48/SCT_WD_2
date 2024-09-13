// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 0;

function startPause() {
  const startPauseBtn = document.getElementById('startPauseBtn');
  const resetBtn = document.getElementById('resetBtn');
  const lapBtn = document.getElementById('lapBtn');

  if (!isRunning) {
    startPauseBtn.textContent = 'Pause';
    resetBtn.disabled = false;
    lapBtn.disabled = false;
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  } else {
    startPauseBtn.textContent = 'Start';
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  lapCount = 0;
  isRunning = false;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startPauseBtn').textContent = 'Start';
  document.getElementById('resetBtn').disabled = true;
  document.getElementById('lapBtn').disabled = true;
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  lapCount++;
  const lapTime = formatTime(elapsedTime);
  const lapDiv = document.createElement('div');
  lapDiv.textContent = `Lap ${lapCount}: ${lapTime}`;
  document.getElementById('laps').appendChild(lapDiv);
}

function updateTime() {
  elapsedTime++;
  document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, '0');
}
