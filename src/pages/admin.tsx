export default function Home() {

    return (
      <>
        <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@^16/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/netlify-cms-app/dist/netlify-cms-app.js"></script>

        <script id="init">
          NetlifyCmsApp.init();
        </script>
      </>
    )
  }