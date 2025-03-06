export default function EmbedData(pageName:string,codeType:string,spaceName:string){
    if(codeType=="HTML"){
        return `<script src="https://feedback-io-xi.vercel.app/iframeResizer.min.js"></script>
        
        <iframe
          id="feedback-io-widget"
          src="https://feedback-io-xi.vercel.app/${pageName}/${spaceName}"
          frameborder="0"
          scrolling="no"
          width="100%"
          loading="lazy"
          title="Feedback Widget"
          style="border: none; min-height: 400px; width: 100%; display: block;">
        </iframe>
`
    }
    else return `<FeedbackWidget pageName='${pageName}' spaceName='${spaceName}'/>`
}



