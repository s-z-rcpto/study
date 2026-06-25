'use strict';

/* =====================================================================
   Автоперевірка тренажера селекторів.

   Як це працює:
   - для кожного завдання тут зберігається ЕТАЛОННИЙ набір елементів
     (через довідковий селектор "ref") і очікувана властивість;
   - перевіряємо: усі потрібні елементи мають цю властивість,
     а жоден зайвий — НЕ має.
   Сам твій селектор скрипт не читає — він дивиться лише на результат
   (обчислені стилі), тож спосіб запису селектора може бути будь-яким,
   аби він влучив РІВНО в потрібні елементи.
   ===================================================================== */

const TASKS = [
    { n: 1,  ref: 'h1',                    prop: 'color',           value: 'rgb(255, 0, 0)' },
    { n: 2,  ref: 'h3',                    prop: 'color',           value: 'rgb(0, 128, 0)' },
    { n: 3,  ref: '.author',              prop: 'fontStyle',       value: 'italic' },
    { n: 4,  ref: '.price',               prop: 'color',           value: 'rgb(165, 42, 42)' },
    { n: 5,  ref: '#bestseller',          prop: 'outlineStyle',    value: 'solid' },
    { n: 6,  ref: '.book.new',            prop: 'backgroundColor', value: 'rgb(255, 255, 224)' },
    { n: 7,  ref: '#shelf-fantasy .year', prop: 'color',           value: 'rgb(0, 0, 255)' },
    { n: 8,  ref: '.book .tag',           prop: 'textTransform',   value: 'uppercase' },
    { n: 9,  ref: '#shelf-sci .price',    prop: 'backgroundColor', value: 'rgb(255, 192, 203)' },
    { n: 10, ref: '.shelf > p',           prop: 'backgroundColor', value: 'rgb(245, 222, 179)' },
    { n: 11, ref: '.first + .step',       prop: 'backgroundColor', value: 'rgb(173, 216, 230)' },
    { n: 12, ref: '.first ~ .step',       prop: 'color',           value: 'rgb(0, 128, 128)' },
    { n: 13, ref: '.tags li:first-child', prop: 'color',           value: 'rgb(128, 0, 128)' },
    { n: 14, ref: '.tags li:last-child',  prop: 'backgroundColor', value: 'rgb(144, 238, 144)' },
    { n: 15, manual: true }, // :hover — перевіряється очима
];

const norm = (v) => (v || '').replace(/\s+/g, '').toLowerCase();

function checkTask(task, stage) {
    if (task.manual) {
        return { mark: '•', text: 'наведи курсор на кнопку і перевір очима' };
    }

    const targets = Array.from(stage.querySelectorAll(task.ref));
    const all = Array.from(stage.querySelectorAll('*'));
    const targetSet = new Set(targets);
    const want = norm(task.value);

    let hit = 0;      // скільки потрібних елементів вже мають властивість
    let extra = 0;    // скільки ЗАЙВИХ елементів її отримали

    for (const el of targets) {
        if (norm(getComputedStyle(el)[task.prop]) === want) hit++;
    }
    for (const el of all) {
        if (targetSet.has(el)) continue;
        if (norm(getComputedStyle(el)[task.prop]) === want) extra++;
    }

    if (hit === targets.length && extra === 0) {
        return { mark: '✓', text: 'правильно', ok: true };
    }
    if (extra > 0 && hit < targets.length) {
        return { mark: '✗', text: 'селектор влучає не туди (є і зайві, і пропущені елементи)' };
    }
    if (extra > 0) {
        return { mark: '✗', text: `селектор зачепив зайве (+${extra} елем.)` };
    }
    if (hit === 0) {
        return { mark: '✗', text: 'ще не виконано' };
    }
    return { mark: '✗', text: `виконано не для всіх (${hit} із ${targets.length})` };
}

function runChecks() {
    const stage = document.getElementById('stage');
    const out = document.getElementById('result');

    let passed = 0;
    const lines = [];

    for (const task of TASKS) {
        const r = checkTask(task, stage);
        if (r.ok) passed++;
        const num = String(task.n).padStart(2, ' ');
        lines.push(`${r.mark} Завдання ${num}: ${r.text}`);
    }

    const auto = TASKS.filter((t) => !t.manual).length;
    lines.push('');
    lines.push(`Зараховано: ${passed} із ${auto} (15-те — вручну).`);
    if (passed === auto) lines.push('🎉 Усі автозавдання виконано!');

    out.textContent = lines.join('\n');
}

document.getElementById('check-btn').addEventListener('click', runChecks);
