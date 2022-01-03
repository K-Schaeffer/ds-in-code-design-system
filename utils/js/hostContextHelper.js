import { browserName } from './browserNameHelper';

function hostContextHelper(el){

  const userAgent = browserName();

  if(userAgent === 'firefox' || userAgent === 'safari'){
    const element = el.closest("[brand]");
    const brand = el.closest("[brand]").getAttribute("brand");
    const theme = el.closest("[theme]").getAttribute("theme");
    const mode = el.closest("[mode]").getAttribute("mode");

    el.setAttribute('brand', brand);
    el.setAttribute('theme', theme);
    el.setAttribute('mode', mode);

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "attributes") {
          const brand = element.getAttribute("brand");
          const theme = element.getAttribute("theme");
          const mode = element.getAttribute("mode");

          el.setAttribute('brand', brand);
          el.setAttribute('theme', theme);
          el.setAttribute('mode', mode);
        }
      });
    });

    observer.observe(element, {
      attributes: true //configure it to listen to attribute changes
    });
  }
}

export { hostContextHelper }