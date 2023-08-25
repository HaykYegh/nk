import styles from './ServicesChromeExtensions.module.scss';

const ServicesChromeExtensions = () => {
  return (
    <div className={styles.chrome_extensions_wrapper}>
      <div className={styles.chrome_extensions_description}>
        <p>There are 3 main questions about extensions:</p>
        <p>
          What is an extension for chrome? What it can it do? How can we use it?
        </p>
        <p>
          Basically, extensions are programs that help to improve user
          experience and customize browser behavior.
        </p>
        <p>
          Chrome Extensions can be developed using web technologies like
          HTML/CSS/JavaScript. It is possible to replace a JavaScript by using
          any language that in the end can compile to JavaScript(TypeScript,
          Dart, Elm, etc.).
        </p>
        <p>
          One of the popular extensions is Blocking, an extension that prevents
          ads from being displayed.
        </p>
        <p>
          Extension detects in the DOM words like ads, advertisement, etc. and
          removes entire DOM element from the HTML.So, it is also possible to
          customize the webpage using the extension.
        </p>
        <p>
          For minimal Hello-World extension development 10-12 lines of code will
          be needed, but the biggest one will be configuration file
          (manifest.json) where we should specify what permissions are needed,
          where extension should be activated, which file it should run, etc.
        </p>
        <p>
          The development process is very similar to the web development process
          with some nuances. So, if you are familiar with web development, then
          diving into extension development shouldn’t be hard for you, but if
          you don’t have any experience with web technologies, then it will be
          better to start from there.
        </p>
        <p>
          In the end, the extension can be published to Google Extension
          Store(https://chrome.google.com/webstore/category/extensions?utm_source=chrome-ntp-icon)
          and everyone can download, install and use your development program in
          the browser.
        </p>
      </div>
      <div>
        <button>Get your extension project quote</button>
      </div>
    </div>
  );
};

export default ServicesChromeExtensions;
