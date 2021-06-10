(function main() {
    let item = [];
    function t(t) {
        t.preventDefault();
        const bt = document.querySelector("#inputBookTitle"),
            ba = document.querySelector("#inputBookAuthor"),
            by = document.querySelector("#inputBookYear"),
            bic = document.querySelector("#inputBookIsComplete"),
            data = {
                id: +new Date,
                title: bt.value,
                author: ba.value,
                year: by.value,
                isComplete: bic.checked
            };
        
        console.log(data), item.push(data), document.dispatchEvent(new Event("bookChanged"))
    }
    function bt(t) {
        t.preventDefault();
        const bt = document.querySelector("#searchBookTitle");
        query = bt.value,
            query ? c(item.filter((function (item) {
                return item.title.toLowerCase().includes(query.toLowerCase())
            }))) : c(item)
    }
    function ba(t) {
        const n = Number(t.target.id),
            ba = item.findIndex((function (item) {
            return item.id === n
        }));
        -1 !== ba && (item[ba] = { ...item[ba], isComplete: !0 },
            document.dispatchEvent(new Event("bookChanged")))
    }
    function by(t) {
        const bt = Number(t.target.id),
            ba = item.findIndex((function (item) {
                return item.id === bt
            }));
        -1 !== ba && (item[ba] = { ...item[ba], isComplete: !1 },
            document.dispatchEvent(new Event("bookChanged")))
    }
    function bic(t) {
        const bt = Number(t.target.id),
        ba = item.findIndex((function (item) {
                return item.id === bt
            }));
        -1 !== ba && (item.splice(ba, 1),
            document.dispatchEvent(new Event("bookChanged")))
    }
    function c(item) {
        const t = document.querySelector("#incompleteBookshelfList"),
            bt = document.querySelector("#completeBookshelfList");
            t.innerHTML = "",
            bt.innerHTML = "";
        
        for (const data of item) {
            const item = document.createElement("article");
            item.classList.add("book_item");
            const a = document.createElement("h2");
            a.innerText = data.title;
            const u = document.createElement("p");
            u.innerText = "Penulis: " + data.author;
            const r = document.createElement("p");

            if (r.innerText = "Tahun: " + data.year, item.appendChild(a), item.appendChild(u), item.appendChild(r), data.isComplete) {
                const t = document.createElement("div");
                t.classList.add("action");
                const ba = document.createElement("button");
                ba.id = data.id,
                    ba.innerText = "Belum Selesai dibaca",
                    ba.classList.add("green"),
                    ba.addEventListener("click", by);
                const a = document.createElement("button");
                a.id = data.id,
                    a.innerText = "Hapus buku",
                    a.classList.add("red"),
                    a.addEventListener("click", bic),
                    t.appendChild(ba),
                    t.appendChild(a),
                    item.appendChild(t),
                    bt.appendChild(item)
            } else {
                const bt = document.createElement("div");
                bt.classList.add("action");
                const by = document.createElement("button");
                by.id = data.id,
                    by.innerText = "Selesai dibaca",
                    by.classList.add("green"),
                    by.addEventListener("click", ba);
                const a = document.createElement("button");
                a.id = data.id,
                    a.innerText = "Hapus buku",
                    a.classList.add("red"),
                    a.addEventListener("click", bic),
                    bt.appendChild(by),
                    bt.appendChild(a),
                    item.appendChild(bt),
                    t.appendChild(item)
            }
        }
    }
    function sub() {
        !function (item) {
            localStorage.setItem("books", JSON.stringify(item))
        }(item), c(item)
    }
    window.addEventListener("load", (function () {
        item = JSON.parse(localStorage.getItem("books")) || [], c(item);
        const ba = document.querySelector("#inputBook"),
            by = document.querySelector("#searchBook");
            ba.addEventListener("submit", t),
            by.addEventListener("submit", bt),
            document.addEventListener("bookChanged", sub)
    }))
})();