 import goodStorage from 'good-storage'
 export class ImgUtils{
    static imgList:Record<string,string> = {}
    static getSotrageImgList(){
        this.imgList = goodStorage.get('imgList') || {}
        if(this.isEmtpy()) {
            this.loadAllImg()
            goodStorage.set('imgList',this.imgList)
        }
    }
    static getImg(imgName:string):string{
        return ImgUtils.imgList[imgName] || ''
    }
    static isEmtpy():boolean{
        return !Object.getOwnPropertyNames(this.imgList).length
    }
    static loadAllImg(){
        const imgs = import.meta.globEager('../assets/img/**/*.png')
        let imgName = ''
        let absolutePath = ''
        for(let relativePath in imgs){
            absolutePath = imgs[relativePath].default
            imgName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1)
            this.imgList[imgName] = absolutePath
        }
    }
    
}
export default ImgUtils.getImg
