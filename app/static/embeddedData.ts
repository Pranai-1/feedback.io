export default function(pageName:string,codeType:string,spaceName:string){
    if(codeType=="HTML"){
        return `<script src="https://feedback-io-xi.vercel.app/iframeResizer.min.js"></script>
        
        <iframe
          id="feedback-io-widget"
          src="https://feedback-io-xi.vercel.app/${pageName}/${spaceName}"
          frameborder="0"
          scrolling="no"
          width="100%"
          style="border: none; min-height: 300px; width: 100%; display: block;">
        </iframe>
        
        <script>
          document.addEventListener("DOMContentLoaded", function () {
            iFrameResize({ 
              log: false, 
              checkOrigin: ['https://feedback-io-xi.vercel.app'], 
              heightCalculationMethod: 'max' 
            }, "#feedback-io-widget");
          });
        </script>
`
    }
    else return ""
}