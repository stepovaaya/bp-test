const supportedLanguages = ["en", "es", "fr", "nl", "ru", "zh", "ja"];

const userLanguage = navigator.language.slice(0, 2);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const languageParam = urlParams.get("lang");

let language = supportedLanguages.includes(userLanguage) ? userLanguage : "en";
if (languageParam && supportedLanguages.includes(languageParam)) {
    language = languageParam;
}

const price = 9.99

const headline = document.getElementById("headline");
const content = document.getElementById("content");
const privacy_policy = document.getElementById("privacy_policy")

switch (language) {
    case "fr":
        headline.innerHTML = "Accès illimité<br>à toutes les fonctionnalités";
        documents.innerHTML = "Documents illimités";
        mode.innerHTML = "Mode décompte";
        recognition.innerHTML = "Reconnaissance de texte (OCR)";
        headline2.innerHTML = "Tous les mois";
        per_month.innerHTML = "par mois";
        daysfree.innerHTML = "3 JOURS GRATUITS";
        month.innerHTML = "mois";
        headline3.innerHTML = "Tous les ans";
        per_year.innerHTML = "par an";
        most_popular.innerHTML = "LE PLUS POPULAIRE";
        month2.innerHTML = "mois";
        button.innerHTML = "Continuer";
        description_btn.innerHTML = "Renouvelable automatiquement. Annulez à tout moment.";
        terms_of_use.innerHTML = "Conditions d'utilisation";
        privacy_policy.innerHTML = "Politique de confidentialité";
        restore.innerHTML = "Restaurer";
        break;
    case "zh":
        headline.innerHTML = "无限制使用<br>所有功能";
        documents.innerHTML = "文档无限制";
        mode.innerHTML = "计数模式";
        recognition.innerHTML = "文本识别（OCR）";
        headline2.innerHTML = "T每月";
        per_month.innerHTML = "月";
        daysfree.innerHTML = "3日免费";
        month.innerHTML = "月";
        headline3.innerHTML = "包年";
        per_year.innerHTML = "每年";
        most_popular.innerHTML = "最热门";
        month2.innerHTML = "月";
        button.innerHTML = "继续";
        description_btn.innerHTML = "自动续订。可随时取消。";
        terms_of_use.innerHTML = "使用条款";
        privacy_policy.innerHTML = "隐私政策";
        restore.innerHTML = "恢复";
        break;
    case "ru":
        headline.innerHTML = "Неограниченный доступ<br>ко всем функциям";
        documents.innerHTML = "Любое количество документов";
        mode.innerHTML = "Режим «Подсчет»";
        recognition.innerHTML = "Распознавание текста (OCR)";
        headline2.innerHTML = "1 месяц";
        per_month.innerHTML = "в месяц";
        daysfree.innerHTML = "3 ДНЯ БЕСПЛАТНО";
        month.innerHTML = "месяц";
        headline3.innerHTML = "1 ГОД";
        per_year.innerHTML = "в год";
        most_popular.innerHTML = "ПОПУЛЯРНОЕ";
        month2.innerHTML = "месяц";
        button.innerHTML = "Продолжить";
        description_btn.innerHTML = "Автопродление. Отмена в любое время.";
        terms_of_use.innerHTML = "Условия использования";
        privacy_policy.innerHTML = "Конфиденциальность";
        restore.innerHTML = "Восстановить";
        break;
    case "ja":
        headline.innerHTML = "全ての機能へ<br>無制限アクセス";
        documents.innerHTML = "無制限のドキュメント";
        mode.innerHTML = "カウントモード";
        recognition.innerHTML = "テキスト認識 (OCR)";
        headline2.innerHTML = "月次";
        per_month.innerHTML = "月";
        daysfree.innerHTML = "3日間無料";
        month.innerHTML = "{{price}}$/か月";
        headline3.innerHTML = "年次";
        per_year.innerHTML = "/年";
        most_popular.innerHTML = "一番人気";
        month2.innerHTML = "か月";
        button.innerHTML = "続行する";
        description_btn.innerHTML = "自动续订。可随时取消。";
        terms_of_use.innerHTML = "利用規約";
        privacy_policy.innerHTML = "プライバシーポリシー";
        restore.innerHTML = "復元する";
        break;
    case "es":
            headline.innerHTML = "Acceso ilimitado<br>a todas las funciones";
            documents.innerHTML = "Documentos ilimitados";
            mode.innerHTML = "Modo de recuento";
            recognition.innerHTML = "Reconocimiento de texto (OCR)";
            headline2.innerHTML = "Mensual";
            per_month.innerHTML = "por mes";
            daysfree.innerHTML = "3 DÍAS GRATIS";
            month.innerHTML = "mes";
            headline3.innerHTML = "Anual";
            per_year.innerHTML = "por año";
            most_popular.innerHTML = "LO MÁS PEDIDO";
            month2.innerHTML = "mes";
            button.innerHTML = "Continuar";
            description_btn.innerHTML = "Renovable automáticamente. Cancela cuando quieras.";
            terms_of_use.innerHTML = "Términos de uso";
            privacy_policy.innerHTML = "Política de privacidad";
            restore.innerHTML = "Restablecer";
            break;
    case "nl":
            headline.innerHTML = "Onbeperkte toegang<br>tot alle functies";
            documents.innerHTML = "Onbeperkt aantal documenten";
            mode.innerHTML = "Aantal modus";
            recognition.innerHTML = "Gratis tekstherkenning (OCR)";
            headline2.innerHTML = "Maandelijks";
            per_month.innerHTML = "per maand";
            daysfree.innerHTML = "3 DAGEN GRATIS";
            month.innerHTML = "maand";
            headline3.innerHTML = "Jaarlijks";
            per_year.innerHTML = "per jaar";
            most_popular.innerHTML = "MEEST POPULAIR";
            month2.innerHTML = "maand";
            button.innerHTML = "Doorgaan";
            description_btn.innerHTML = "Automatisch verlengbaar. Altijd annuleren.";
            terms_of_use.innerHTML = "Gebruiksvoorwaarden";
            privacy_policy.innerHTML = "Privacybeleid";
            restore.innerHTML = "Herstellen";
            break;
    default:
        headline.innerHTML = "Unlimited Access<br>to All Features";
        documents.innerHTML = "Unlimited documents";
        mode.innerHTML = "Count mode";
        recognition.innerHTML = "Text recognition (OCR)";
        headline2.innerHTML = "Monthly";
        per_month.innerHTML = "per month";
        daysfree.innerHTML = "3 DAYS FREE";
        month.innerHTML = "month";
        headline3.innerHTML = "Annually";
        per_year.innerHTML = "per year";
        most_popular.innerHTML = "MOST POPULAR";
        month2.innerHTML = "month";
        button.innerHTML = "Continue";
        description_btn.innerHTML = "Auto-renewable. Cancel anytime.";
        terms_of_use.innerHTML = "Terms of Use";
        privacy_policy.innerHTML = "Privacy Policy";
        restore.innerHTML = "Restore";
        break;
}





