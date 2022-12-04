  let TwitterBox = document.getElementById("TwitterBox");
  let TwitterButton = document.getElementById("TwitterButton");

  TwitterButton.onclick = function() {
    TwitterBox.select();
    document.execCommand("copy");
    TwitterButton.innerText

  }

  let TelegramBox = document.getElementById("TelegramBox");
  let TelegramButton = document.getElementById("TelegramButton");

    TelegramButton.onclick = function() {
      TelegramBox.select();
      document.execCommand("copy");
      TelegramButton.innerText
    }
  
  let YoutubeBox = document.getElementById("YoutubeBox");
  let YoutubeButton = document.getElementById("YoutubeButton");

    YoutubeButton.onclick = function() {
      YoutubeBox.select();
      document.execCommand("copy");
      YoutubeButton.innerText
    }

  let wlBox = document.getElementById("wlBox");
  let wlButton = document.getElementById("wlButton");

    wlButton.onclick = function() {
      wlBox.select();
      document.execCommand("copy");
      wlButton.innerText
    }
    let wl2Box = document.getElementById("wl2Box");
    let wl2Button = document.getElementById("wl2Button");
  
      wl2Button.onclick = function() {
        wl2Box.select();
        document.execCommand("copy");
        wl2Button.innerText
      }
      let DiscordBox = document.getElementById("DiscordBox");
      let DiscordButton = document.getElementById("DiscordButton");
    
      DiscordButton.onclick = function() {
          DiscordBox.select();
          document.execCommand("copy");
          DiscordButton.innerText
        }