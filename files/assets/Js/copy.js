const copyText = document.querySelectorAll('.copyText');
const copyAfter = document.querySelectorAll('.copied-button-text');

copyText.forEach(text => {
    let copyNode ;
    if(text.querySelector('.invisible_pw')) {
        copyNode = text.querySelector('.invisible_pw');
    } else {
        copyNode = text.querySelector('.copyText span')
    }
    text.addEventListener("click", () => {
        const r = document.createRange();
        console.log(copyNode);
        r.selectNode(copyNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
       // console.log(window.getSelection());
        document.execCommand('copy');
        //text.classList.add('copied');
        console.log(document.querySelector('.copied'));
        setInterval(function () { document.querySelector(' .copied') }, 4000);
    });
        //console.log( copyNode.innerText);
        window.getSelection().removeAllRanges();

});

