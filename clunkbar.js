document.addEventListener('keydown', function(event) {
  if (event.metaKey && event.keyCode === 220) {
    // Toggle visibility of the channel and guilds columns 
    var channelWrap = $('.flex-vertical.channels-wrap');
    var guildsWrap = $('.guilds-wrapper');
    var titleWrap = $('.title-wrap');
    if (channelWrap.getAttribute('style') === 'display: none') {
      channelWrap.setAttribute('style', '');
      guildsWrap.setAttribute('style', '');
      if (titleWrap) {
        titleWrap.setAttribute('style', '');
      }
    } else {
      channelWrap.setAttribute('style', 'display: none');
      guildsWrap.setAttribute('style', 'display: none');
      if (titleWrap) {
        titleWrap.setAttribute('style', 'padding-left: 70px');
      }
    }
  }
});
