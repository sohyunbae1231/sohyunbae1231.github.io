const quotes = [
    {
        quote: "좋아하니까. 너를 좋아하니까. 이 지구상의 누구보다도.",
        author: "Conan Edogawa",
    },
    {
        quote: "사람이 사람을 죽이는 이유 같은 건 내 알 바 아니지만,\n사람이 사람을 구하는 이유에는 논리적인 사고가 존재하지 않아.",
        author: "Shinichi Kudo",
    },
    {
        quote: "인간의 생명은 한계가 있기 때문에 소중한 거에요. 한계가 있으니까 열심히 살아가는 거고요.",
        author: "Hattori Heiji",
    },
    {
        quote: "제로는 모든 것의 시작, 거기에서 시작하지 않으면 아무것도 일어나지 않고, 아무것도 달성할 수 없어!",
        author: "Shinichi Kudo",
    },
    {
        quote: "Even if you are facing a bitter aspect of life, drugs and murder are foul without any excuse.\nDeserve a red card for a loser.",
        author: "Conan Edogawa",
    },
    {
        quote: "도망치지마, 하이바라. 자신의 운명에서... 도망치지 말라고.",
        author: "Conan Edogawa",
    },
    {
        quote: "단 하나의 진실을 꿰뚫는 겉 보기엔 어린이, 두뇌는 어른! 그 이름은 명탐정 코난!",
        author: "Conan Edogawa",
    },
    {
        quote: "불가능한 것을 제외하고 남은 것이 설령 믿을 수 없다고 해도... 그것이 진실이야",
        author: "Conan Edogawa",
    },
    {
        quote: "모양만 보고 판단해선 안 돼.\n아름다운 장미에 가시가 있는 것처럼\n유난히 선한 척하는 사람일수록\n속으로는 무슨 생각하는지 알 수 없는 법이니까",
        author: "Ai Haibara",
    },
    {
        quote: "Fear of death is worse than death itself.",
        author: "Shuichi Akai",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;