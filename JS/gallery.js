document.addEventListener("DOMContentLoaded", function () {
    const galleryData = {
      japanese_painting: [
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り" },
        { src: "image/蹌踉.jpg", alt: "蹌踉", caption: "蹌踉" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す" },
        { src: "image/gulang.jpg", alt:"Voice of Gulang",caption:"Voice of Gulang"},
        { src: "image/awa.jpg", alt: "awa", caption: "泡" }
      ],
      water_color: [
        { src: "image/寂寞的夜晚.jpg", alt: "寂しい夜", caption: "寂しい夜" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行" },
        { src: "image/夜间飞行2.jpg", alt: "fly2", caption: "夜間飛行2" },
        { src: "image/一本の樹.jpg", alt: "一本の樹", caption: "一本の樹" },
        { src: "image/夕燒.jpg", alt: "夕燒", caption: "夕燒" },
        { src: "image/所沢の出口.jpg", alt: "所沢の出口", caption: "所沢の出口" }
      ],
      print: [
        { src:"image/Primitive_Life.jpg", alt:"Primitive_Life",caption:"Primitive Life"},
        { src:"image/tori.jpg", alt:"tori",caption:"鳥"},
        { src:"image/nazo.jpg", alt:"nazo",caption:"謎"},
        { src: "image/Primitive Life2.jpg", alt: "Primitive Life2", caption: "Primitive Life2" },
        { src:"image/tori2.jpg", alt:"tori2",caption:"鳥2"},
        { src:"image/toritachi.jpg", alt:"toritachi",caption:"鳥たち"},
        { src:"image/mokuhan.jpg", alt:"mokuhan",caption:"逃げてる親知らず"},
        { src:"image/torino.jpg", alt:"torino",caption:"鳥の眺望"}

      ],
      oil_painting: [
        { src:"image/朝の海、廈門Early_Morning_Sea_In_Amoy,2022.jpg", alt:"朝の海",caption:"朝の海"},
        { src:"image/婺源の夕暮れ.jpg", alt:"婺源の夕暮れ",caption:"婺源の夕暮れ"}
      ],
      something_Else: []
    };
  
    
    function renderGallery(images) {
      const container = document.getElementById("gallery-content");
      container.innerHTML = "";
  
      if (!images || images.length === 0) {
        container.innerHTML = "<p class='text-center'>まだ作品がありません</p>";
        return;
      }
  
      images.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-lg-4";
        col.innerHTML = `
                <a href="${item.src}" data-fancybox="gallery" data-caption="${item.caption}">
                    <img src="${item.src}" alt="${item.alt}" class="img-fluid" loading="lazy">
                </a>

        `;
        container.appendChild(col);
      });
  
      Fancybox.bind("[data-fancybox]", {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
            right: ["slideshow", "thumbs", "close"]
          }
        }
      });
    }
  
    const initialImages = [
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き" },
        { src: "image/寂寞的夜晚.jpg", alt: "night", caption: "寂しい夜" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行" },
        { src: "image/夜间飞行2.jpg", alt: "fly 2", caption: "夜間飛行2" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り" },
        { src: "image/蹌踉.jpg", alt: "yume", caption: "蹌踉" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す" },
        { src: "image/gulang.jpg", alt:"Voice of Gulang",caption:"Voice of Gulang"},
        { src: "image/awa.jpg", alt: "awa", caption: "泡" }
    ];
    renderGallery(initialImages);
  
    
    document.querySelectorAll(".nav-link[data-name]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.getAttribute("data-name").toLowerCase();
        const images = galleryData[category];
        renderGallery(images);
  
        const offcanvasEl = document.querySelector(".offcanvas.show");
        if (offcanvasEl) {
          bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
        }
      });
    });
  });
  
