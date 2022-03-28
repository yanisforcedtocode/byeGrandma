// === packages
import {useState, useEffect, Fragment} from "react";
 
// === components
import CloseRelatives from "../components/layout/closeRelatives";
import CloseRelativesOverlay from "../components/layout/closeRelatives__overLay";
import Body from './../components/sections/body'
import Intersection from "../components/layout/intersection";
// === files
// === bg
import bg02 from "../asset/images/homepage/intersection12.jpg"
// === variables
const relatives = [
    {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/tseKinWai.jpeg', name:'謝健威 (1)', relation:'孫', message: "你好嗎？ 很掛住你呢！我最鐘意同有記憶嘅就係同你去飲茶。同你去係最開心嘅因為可以咩都唔理，無咩規矩咁叫鐘意食嘅野。同啲唔熟嘅人，我總會扮到好似好有規矩好客氣咁…懶係有儀態。所以同婆婆你飲係最自在，最開懷，食得最開心嘅。但係有時有啲麻煩，就係你鐘意同我爭俾錢，成日靜靜雞扮去廁所就俾定部長＄５００ 蚊，嘢都未食完，真係令人唔好意思，哈哈！好彩之後我都夠醒目晨早叫定部長唔收你啲錢，所以之後除咗啲慶祝事，我強迫你請我飲茶之外，多數都係我爭贏嘅，Yeah! 你多數會問我食咗幾多錢，我都一定會答：「茶樓話你太靚女，所以唔洗錢❤️」而你就會笑笑口咁話我痴線嘅，哈哈！"},
    {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/tseKinWai_02.jpeg', name:'謝健威 (2)', relation:'孫', message: "自從你係基隆街搬入大埔，見你少咗所以多數星期六日都會入來太和同你飲茶，雖然遠啲，但其實都好開心。與其話我入來陪你，不如話你陪我。的確有你一起，我們渡過了不少悠閒快樂的時光。個回憶就係，我地一年一度嘅聖誕節自助餐（你總係會讀成「自在餐」）好鐘意大時大節一齊食餐好嘅感覺雖然聖誕節對傳統嘅你無咩feel，哈哈。但你真係好懶，就算之前仲行得下都唔肯一齊出去夾嘢食，要我地逐樣拎俾你試下，真係好好笑。而你真係有要求同識食架！食話上年嗰間好食啲，又或者今年啲嘢新鮮啲。婆婆，威仔期待再次同你一齊飲茶同食聖誕自在餐，一齊再爭比錢，睇下下一次你贏定我好無？永遠掛住你的威威敬上"},
    {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/waiHing_00.jpeg', name:'潘惠郷', relation:'女兒', message: "媽媽，你令我勾起生活的點滴。那時我在教烹飪的時刻，有時會比較夜些，那時都是十點零，你就會跑落街等我回來保護我，恐我受騷擾。好似好打得咁。 直到婚後，我有仔仔之後，因我住九樓，無𨋢你又會叫阿中，阿堯幫我抱仔上樓回家。又在生活中帶領我在最耕辛的生活磨鍊。令到我不會有太大壓力。不知不覺堅強起來，媽你對我無形的愛，我係永記於心的。媽，在此感謝你，好掛住你，阿郷給祝福，我永遠懷念你。"},
    {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/tseWaiKong.jpeg', name:'謝惠江', relation:'女婿', message: "我的外母是一位對人真誠,和有愛心的人,我的兩個兒子都是外母在医院接回家中,每天很快手替兩個孫仔冲涼,穿回衣服,孩子在長大过程中時有嘈吵,外母不會責駡,还和他們玩耍,真是家有一老如有一宝,所以在假期,我們會和她一齊飲茶,更會打吓麻雀仔。外母我永遠懷念你。"},
    {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/xiuHing_00.jpeg', name:'王小慶', relation:'新抱', message: "奶奶係我心目中係一個好大方，豪爽，善良，對親戚朋友好有愛嘅人。經常都會問候我父母兄弟姊妹嘅近况，佢地過得好吾好，我阿媽每次來香港，奶奶都話要請飲茶，佢地俩個人好搞笑，佢地握住對方嘅手，奶奶用白話問：“你鄉下几好嗎？”我媽用湖南話答：“香港好好。”類似咁樣嘅對話可以講几分鐘，佢地還有講有笑😁我企係隔離笑到肚痛。奶奶同我講做人吾晒太清醒，糊塗點好。我經常同佢傾計時，可能吾似婆媳，似朋友多點，好掛住以前得閑時揾佢飲茶，等我知道這個世界除左我父母之外，還有一個阿媽好錫我，好無條件咁關心，担心同愛我。我這一刻都忍唔住眼泪長流，奶奶會永遠活係我心中🙏"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/tsuiKing.jpeg', name:'翠琼', relation:'外甥女', message: "在疫情影響下，還來不及探望你老人家，你離開了我們 - 敬愛的舅婆。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/liYukHing_00.jpeg', name:'林玉卿 (1)', relation:'六嫂', message: "我林玉卿和李金容姑奶相識50多載，她為人心地善良，和藹可親和爽朗健談。姑奶有兩個母親，她是細媽所出，她很維護兩個同母生的弟弟，例如：因她父親突然去世，舖內夾萬打開，空空如也，一文錢也沒有，姑奶拍檯大罵二兄長，不應是這情況。大媽70多歲來港在姑奶處住了十數天，令大媽感動到這個女是頂好的。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/liYukHing_01.jpeg', name:'林玉卿 (2)', relation:'六嫂', message: "我年青時因維持家庭生活要出外工作。很少和姑奶聚會，(只限農曆新年) 但我們每年清明時節大都回澳門掃墓。 所以有機會和姑奶到附近新會，石岐等地玩。她一生人很好客，每次飲食後都會爭結賬。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/liYukHing_02.jpeg', name:'林玉卿 (3)', relation:'六嫂', message: "對於她這次離去很傷怠，永遠懷念她。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/liYamX_00.jpeg', name:'李艷玲， 李艷琼， 李艷梅', relation:'侄女', message: "三姑姐大人千古。我們永遠懷念您的慈祥笑容。願您一路好走。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/LiOkFai_00.jpeg', name:'李萼輝', relation:'侄子', message: "三姑姐大人千古。我們永遠懷念您的慈祥笑容。願您一路好走。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/LiOkCau_00.jpeg', name:'李萼洲', relation:'侄子', message: "三姑姐大人千古。我們永遠懷念您的慈祥笑容。願您一路好走。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/chanShunYong.jpeg', name:'陳順容', relation:'表嫂', message: "表姐是一位慈愛的長輩，對我們好関心，经常鼓勵我地，做人要勤力。會講番有関阿豪父母往事，讓我了解佢地故事，表姐令我感覺好温暖，表姐會永遠留在我們心裡。"},
     {imgSrc: 'https://storage.googleapis.com/webasset__yancetse/asset/images/relativesGallery/chanFaiHo.jpeg', name:'陳輝豪', relation:'表弟', message: "表姐是一位慈愛的長輩，對我們好関心，经常鼓勵我地，做人要勤力。會講番有関阿豪父母往事，讓我了解佢地故事，表姐令我感覺好温暖，表姐會永遠留在我們心裡。"},
]

function CloseRelativesPage (props){
    // states
    const [overlayData, setoverlayData] = useState('')
    const [isOpenedOverlay, setisOpenedOverlay] = useState(false)
    // effect
    // handlers
    const imageClickHandler = (ind)=>{
        setisOpenedOverlay(true)
        setoverlayData(relatives[ind])
    }

    return (
        <Fragment>
            <Intersection bg = {bg02} color = "rgb(232 232 232)" title = "婆婆的摯親" message = "婆婆人見人愛，她在我們的生命中留下許多珍貴的回憶。婆婆於我們心中永遠佔一無可取代的地位。在此，我們留下對婆婆的心底話。"></Intersection>
        <Body>
            <CloseRelativesOverlay setisOpenedOverlay = {setisOpenedOverlay} overlayData = {overlayData} isOpenedOverlay = {isOpenedOverlay}/>
            <CloseRelatives imageClickHandler = {imageClickHandler} relatives = {relatives} setoverlayData = {setoverlayData} setisOpenedOverlay = {setisOpenedOverlay}/>
        </Body>
            </Fragment>
    )
}

export default CloseRelativesPage;