function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
// call Button Function 
const callBtns = document.getElementsByClassName('call-btn');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        const serviceInfo = callBtn.parentNode.parentNode.children[0].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.children[2].innerText;
        const coinBalance = getElement('coin-balance').innerText;
        const historySection = document.getElementById('history-section');
        callBtn.classList.add('bg-red-500');
        if (coinBalance < 0 || coinBalance > 19) {
            const afterCoin = coinBalance - 20;
            getElement('coin-balance').innerText = afterCoin;
            const now = new Date().toLocaleTimeString();
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between px-5 items-center bg-[#FAFAFA] mt-3">
                            <div>
                                <h1 class="font-bold">${serviceInfo}</h1>
                                <p>${serviceNumber}</p>
                            </div>
                            <div>
                                <p>${now}</p>
                            </div>
                        </div> `

            historySection.appendChild(div);
            alert(`📞 Calling  ${serviceInfo} - ${serviceNumber}....`);
        }
        else {
            alert('❌ আপনার পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ টা কয়েন লাগবে!');
        }
    })
    const clearBtn = getElement('clear-btn').addEventListener('click', function () {
        document.getElementById('history-section').innerHTML = '';
    })
}

// heart Button Function 
const heartBtns = document.getElementsByClassName('heart-btn');
const heartCount = getElement('heart-count');

for (let heartBtn of heartBtns) {
    heartBtn.addEventListener('click', function () {
        heartBtn.classList.add('text-red-500');
        let total = parseInt(heartCount.innerText);
        total++;
        heartCount.innerText = total;


    });
}
// copy count button function 
const copyCount = getElement('copy-count');
const copyBtns = document.getElementsByClassName('copy-btn');
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', async () => {
        const serviceNumber = copyBtn.parentNode.parentNode.children[2].innerText;
        let total = parseInt(copyCount.innerText);
        total++;
        copyCount.innerText = total;
        try {
            await navigator.clipboard.writeText(serviceNumber);
            alert(" নাম্বার কপি হয়েছে: " + serviceNumber);
        } catch (err) {
            alert("কপি ব্যর্থ হয়েছে!");
        }
    })
}


