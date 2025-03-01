function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
        function abloader() {
            class ABC {
                constructor(config = {}) {
                    this.type = config.type || "blank";
                    this.url = config.url || "about:blank";
                    this.title = "Home - Google Drive";
                    document.addEventListener('DOMContentLoaded', () => {
                        this.setFavicon('https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png');
                        document.title = this.title;
                    });
                }

                setFavicon(faviconUrl) {
                    const link = document.createElement('link');
                    link.rel = 'icon';
                    link.href = faviconUrl;
                    document.head.appendChild(link);
                }
                setType(type) {
                    if (!type) return;
                    this.type = type;
                }
                setUrl(url) {
                    if (!url || !validURL(url)) return;
                    this.url = url;
                }
                getCode() {
                    return `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`;
                }
                open() {
                    if (this.type == "blank") {
                        try {
                            var page = window.open();
                            if (page) {
                                page.document.body.innerHTML = this.getCode();
                            } else {
                                console.error("Failed to open new window.");
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    } else if (this.type == "blob") {
                        try {
                            var page = new Blob([this.getCode()], { type: "text/html" });
                            window.open(URL.createObjectURL(page));
                        } catch (e) {
                            console.error(e);
                        }
                    } else if (this.type == "overwrite") {
                        try {
                            document.body.innerHTML = this.getCode();
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }
            }

            let abcInstance = new ABC({ type: "blank", url: "/index.html" });
            abcInstance.open();
        }
