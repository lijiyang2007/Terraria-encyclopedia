let zoomLevel = 1;
const minZoom = 0.5;
const maxZoom = 3;
const step = 0.1;

window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomLevel = Math.min(zoomLevel + step, maxZoom);
        } else {
            zoomLevel = Math.max(zoomLevel - step, minZoom);
        }
        document.body.style.transform = `scale(${zoomLevel})`;
        document.body.style.transformOrigin = 'top center';
    }
}, { passive: false }); 

        const wikiDatabase = [
            { title: "向导", url: "guide.html", tags: "guide 初始" },
            { title: "商人", url: "merchant.html", tags: "merchant 商店" },
            { title: "护士", url: "nurse.html", tags: "nurse 回血" },
            { title: "爆破专家", url: "demolitionist.html", tags: "爆破 炸药" },
            { title: "染料商", url: "dye_trader.html", tags: "染料 dye" },
            { title: "渔夫", url: "angler.html", tags: "出生 钓鱼" },
            { title: "动物学家", url: "zoologist.html", tags: "动物 狐狸" },
            { title: "树妖", url: "dryad.html", tags: "净化" },
            { title: "画家", url: "painter.html", tags: "油漆" },
            { title: "高尔夫球手", url: "golfer.html", tags: "高尔夫" },
            { title: "军火商", url: "arms_dealer.html", tags: "军火 枪" },
            { title: "酒馆老板", url: "tavernkeep.html", tags: "酒馆 撒旦" },
            { title: "发型师", url: "stylist.html", tags: "发型" },
            { title: "哥布林工匠", url: "goblin_tinkerer.html", tags: "哥布林 重铸 铂金吞噬者" },
            { title: "巫医", url: "witch_doctor.html", tags: "丛林" },
            { title: "服装商", url: "clothier.html", tags: "服装 裁缝" },
            { title: "机械师", url: "mechanic.html", tags: "机械 电路 电工妹" },
            { title: "派对女孩", url: "party_girl.html", tags: "派对" },
            { title: "巫师", url: "wizard.html", tags: "魔法" },
            { title: "税收官", url: "tax_collector.html", tags: "税收 钱" },
            { title: "松露人", url: "truffle.html", tags: "松露 蘑菇" },
            { title: "海盗", url: "Pirate.html", tags: "独眼" },
            { title: "蒸汽朋克人", url: "steampunker.html", tags: "蒸汽" },
            { title: "机器侠", url: "cyborg.html", tags: "机器" },
            { title: "公主", url: "Princess.html", tags: "小蛋糕" },
            { title: "老人", url: "old_man.html", tags: "地牢" },
            { title: "旅商", url: "traveling_merchant.html", tags: "商贩帽" },
            { title: "骷髅商人", url: "skeleton_merchant.html", tags: "骷髅" },
            { title: "血月", url: "blood_moon.html", tags: "blood moon" },
            { title: "哥布林军队", url: "goblin_army.html", tags: "哥布林 侵略" },
            { title: "撒旦军队", url: "old_ones_army.html", tags: "撒旦 old one" },
            { title: "史莱姆雨", url: "slime_rain.html", tags: "史莱姆" },
            { title: "雨", url: "rain.html", tags: "rain" },
            { title: "沙尘暴", url: "sandstorm.html", tags: "沙" },
            { title: "大风天", url: "windy_day.html", tags: "风" },
            { title: "派对", url: "party.html", tags: "party" },
            { title: "火把神", url: "torch_god.html", tags: "火把" },
            { title: "日食", url: "solar_eclipse.html", tags: "eclipse" },
            { title: "海盗入侵", url: "pirate_invasion.html", tags: "海盗" },
            { title: "南瓜月", url: "pumpkin_moon.html", tags: "南瓜" },
            { title: "霜月", url: "frost_moon.html", tags: "霜" },
            { title: "雪人军团", url: "frost_legion.html", tags: "雪人" },
            { title: "火星暴乱", url: "martian_madness.html", tags: "火星" },
            { title: "月亮事件", url: "lunar_events.html", tags: "四柱 月亮" },
            { title: "史莱姆王", url: "king_slime.html", tags: "史莱姆 slime king" },
            { title: "克苏鲁之眼", url: "eye_of_cthulhu.html", tags: "克苏鲁 eye" },
            { title: "世界吞噬者", url: "eater_of_worlds.html", tags: "世吞 worm" },
            { title: "克苏鲁之脑", url: "brain_of_cthulhu.html", tags: "克脑 brain" },
            { title: "蜂王", url: "queen_bee.html", tags: "蜂 queen bee" },
            { title: "骷髅王", url: "skeletron.html", tags: "骷髅 skeletron" },
            { title: "独眼巨鹿", url: "deerclops.html", tags: "巨鹿 饥荒" },
            { title: "肉山", url: "wall_of_flesh.html", tags: "wall of flesh" },
            { title: "史莱姆皇后", url: "queen_slime.html", tags: "史莱姆" },
            { title: "双子魔眼", url: "the_twins.html", tags: "双子 魔眼 机械" },
            { title: "毁灭者", url: "the_destroyer.html", tags: "铁长直 机械" },
            { title: "机械骷髅王", url: "skeletron_prime.html", tags: "铁吴克 机械" },
            { title: "世纪之花", url: "plantera.html", tags: "世花 plantera" },
            { title: "石巨人", url: "golem.html", tags: "石头人 golem" },
            { title: "猪龙鱼公爵", url: "duke_fishron.html", tags: "猪鲨" },
            { title: "光之女皇", url: "empress_of_light.html", tags: "光女" },
            { title: "拜月教邪教徒", url: "lunatic_cultist.html", tags: "邪教徒" },
            { title: "月亮领主", url: "moon_lord.html", tags: "月总 moon lord" },
            { title: "森林", url: "forest.html", tags: "forest" },
            { title: "地下层", url: "underground.html", tags: "地下" },
            { title: "洞穴层", url: "caverns.html", tags: "洞穴" },
            { title: "地狱", url: "underworld.html", tags: "underworld" },
            { title: "太空", url: "space.html", tags: "space" },
            { title: "雪原生物群系", url: "snow.html", tags: "雪原" },
            { title: "冰雪生物群系", url: "ice.html", tags: "冰原" },
            { title: "沙漠", url: "desert.html", tags: "desert" },
            { title: "地下沙漠", url: "underground_desert.html", tags: "desert underground" },
            { title: "海洋", url: "ocean.html", tags: "ocean" },
            { title: "丛林", url: "jungle.html", tags: "jungle" },
            { title: "地下丛林", url: "underground_jungle.html", tags: "jungle underground" },
            { title: "丛林神庙 ", url: "jungle_temple.html", tags: "蜥蜴 神庙" },
            { title: "腐化之地", url: "corruption.html", tags: "腐化 corruption" },
            { title: "地下腐化之地", url: "underground_corruption.html", tags: "腐化 corruption underground" },
            { title: "猩红之地", url: "crimson.html", tags: "猩红 crimson" },
            { title: "地下猩红之地", url: "underground_crimson.html", tags: "猩红 crimson underground" },
            { title: "神圣之地", url: "hallow.html", tags: "神圣 hallow" },
            { title: "地下神圣之地", url: "underground_hallow.html", tags: "神圣 hallow underground" },
            { title: "地牢", url: "dungeon.html", tags: "dungeon" }
        ];

       document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('wiki-search-input');
    const resultsDropdown = document.getElementById('search-results');

    if (!searchInput || !resultsDropdown) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        resultsDropdown.innerHTML = '';

        if (query.length < 1) {
            resultsDropdown.style.display = 'none';
            return;
        }

        const filtered = wikiDatabase.filter(item => 
            item.title.toLowerCase().includes(query) || 
            (item.tags && item.tags.toLowerCase().includes(query))
        );

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const a = document.createElement('a');
                a.href = item.url;
                a.className = 'result-item';
                a.innerHTML = `<span>${item.title}</span>`;
                resultsDropdown.appendChild(a);
            });
            resultsDropdown.style.display = 'block';
        } else {
            resultsDropdown.style.display = 'none';
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const firstResult = resultsDropdown.querySelector('.result-item');
            if (firstResult) {
                window.location.href = firstResult.getAttribute('href');
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            resultsDropdown.style.display = 'none';
        }
    });
});