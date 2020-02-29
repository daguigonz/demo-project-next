export default class extends React.Component{
  render(){
    return <div>
      
      <img class="cbv-logo" src="/static/combativa.svg" alt="combativa"/>
      
      <h1>  Hola Mundo !! </h1>
      <p>bienvenido texto de prueba </p>
      <style jsx>{`
        h1 {
          color: #ff312a;
        }
        :global(div p) {
          color: #fff;
        }
        img {
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }
        .cbv-logo{
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }

      `}</style>

      <style jsx global>{`
        body {
          background:#022039;
        }
      `}</style>
 

      </div>
  }
}