export default function orderByProps(object, order) {

    const arrKey = []; // массив параметров, где будем хранить отсортированные в алфавиом порядке элементы
    // пока что, просто добавим все параметры в массив
    for (const item in object) {
        arrKey.push({
            key: item, 
            value: object[item]
        });
    }

    // отсортируем все элементы в алфавитном порядке по ключу (оно же наименование параметра)
    arrKey.sort((a, b) => {
        const j = (a.key > b.key) ? 1 : -1;
        return j;
    });

    // итоговый массив параметров
    let result = [];

    for (const item of order) {
        // добавляем в итоговый массив элемент с указанным параетром
        result.push({
            key: item,
            value: object[item]
        });
        // удаляем из массива со всеми параметрами элемент с переданным параметром (чтобы небыло дублей)
        arrKey.splice(arrKey.indexOf(item), 1);
    }
    
    // объединяем масивы
    result = result.concat(arrKey);
    return result;
}