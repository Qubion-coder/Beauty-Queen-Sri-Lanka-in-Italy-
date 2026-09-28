// Web Audio API ambient luxury chime / soundscape generator
// Generates gentle, warm regal golden chimes without external audio assets

class GlamourAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a single soft pentatonic chime (F# pentatonic for ethereal luxury vibe)
  public playSparkleNote(frequency?: number) {
    try {
      this.init();
      if (!this.ctx) return;

      const pentatonic = [370, 440, 493.88, 554.37, 659.25, 740, 880, 987.77, 1108.73];
      const freq = frequency || pentatonic[Math.floor(Math.random() * pentatonic.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.5);
    } catch {
      // Audio not permitted or user hasn't interacted
    }
  }

  // Toggle ambient atmospheric chime sequence
  public toggleAmbient(onStateChange?: (playing: boolean) => void): boolean {
    this.init();
    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.start();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  public start() {
    this.isPlaying = true;
    this.playSparkleChord();
    this.timer = window.setInterval(() => {
      if (Math.random() > 0.3) {
        this.playSparkleNote();
      }
    }, 1800);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }

  private playSparkleChord() {
    const chord = [370, 554.37, 740, 987.77];
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        this.playSparkleNote(freq);
      }, idx * 160);
    });
  }
}

export const luxuryAudio = new GlamourAudioEngine();
