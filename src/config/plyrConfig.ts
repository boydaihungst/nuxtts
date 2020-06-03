export const DefaultConfig: Plyr.Options = {
  autopause: true,
  debug: process.env.NODE_ENV !== 'development',
  i18n: {
    restart: 'Bắt đầu lại',
    rewind: 'Tua lại {seektime}s',
    play: 'Phát video',
    pause: 'Tạm dừng',
    fastForward: 'Tua nhanh {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Âm lượng',
    mute: 'Tắt âm',
    unmute: 'Huỷ tắt âm',
    enableCaptions: 'Bật captions',
    disableCaptions: 'Tắt captions',
    download: 'Download',
    enterFullscreen: 'Mở toàn màn hình',
    exitFullscreen: 'Thoát toàn màn hình',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Cài đặt',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Tốc độ',
    normal: 'Bình thường',
    quality: 'Chất lượng',
    loop: 'Lặp',
    start: 'Bắt đầu',
    end: 'Kết thúc',
    all: 'Tất cả',
    reset: 'Reset',
    disabled: 'Tắt',
    enabled: 'Bật',
    advertisement: 'Quảng cáo',
    qualityBadge: {
      2160: '2160p-4K',
      1440: '1440p-2K',
      1080: '1080p',
      720: '720p',
      576: '576p',
      480: '480p',
      360: '360p',
    },
  },
  quality: {
    default: 1080,
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
  },
  controls: [
    'play-large',
    // 'restart',
    'rewind',
    'play',
    'fast-forward',
    'progress',
    'current-time',
    'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    // 'download',
    'fullscreen',
  ],
};
