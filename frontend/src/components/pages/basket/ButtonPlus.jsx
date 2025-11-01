import { RxPlus } from "react-icons/rx";
import { useBasketActions } from "@/hooks/useBasketAction";

/**
 * Button to increase the quantity of goods
 * @param {Object} props
 * @param {Object} props.item - Object with items from the cart in server
 * @param {Function} props.setBasketItems - State function to display data as an object
 */

const ButtonPlus = ({ item, setBasketItems }) => {
  const { updateBasketItem } = useBasketActions();

  /**
   * Синхронизирует два объекта, обновляя целевой объект значениями из исходного
   * Функция сравнивает свойства исходного и целевого объектов и возвращает
   * обновленную версию целевого объекта только если есть изменения
   *
   * @param {Object} source - Исходный объект (источник истинных данных)
   * @param {Object} target - Целевой объект (который нужно обновить)
   * @returns {Object} - Обновленный целевой объект или оригинал, если изменений нет
   *
   * @example
   * const serverData = { id: 1, name: "John", age: 30 };
   * const localData = { id: 1, name: "John", age: 25 };
   * const result = syncObjects(serverData, localData);
   * // result: { id: 1, name: "John", age: 30 }
   */
  function syncObjects(source, target) {
    // Флаг для отслеживания наличия изменений
    // Если ни одно поле не изменилось, вернем оригинальный target (без создания нового объекта)
    let hasChanges = false;

    // Создаем поверхностную копию целевого объекта
    // Используем spread оператор для клонирования свойств target
    // Это нужно чтобы не мутировать оригинальный target
    const result = { ...target };

    // Проходим по всем свойствам объекта-источника (source)
    // Этот цикл проверяет только те поля, которые есть в source
    for (const key in source) {
      // Сравниваем значения текущего свойства в source и target
      // Важно: строгое сравнение (===) проверяет и значение, и тип
      if (source[key] !== target[key]) {
        // Если значения различаются, обновляем свойство в результате
        result[key] = source[key];

        // Устанавливаем флаг изменений в true
        // Это означает, что хотя бы одно поле было обновлено
        hasChanges = true;
      }
      // Если значения одинаковые, просто пропускаем это поле
      // Оно останется с оригинальным значением из target (уже скопировано в result)
    }

    // Возвращаем результат в зависимости от наличия изменений:
    // - Если были изменения: возвращаем новый объект result с обновленными полями
    // - Если изменений не было: возвращаем оригинальный target (экономим память)
    return hasChanges ? result : target;
  }

  // Пример использования
  const serverData = { id: 1, name: "John", age: 30, city: "New York" };
  const localData = { id: 1, name: "John", age: 25, city: "New York" };

  // Синхронизируем localData с serverData
  // Ожидаем, что age изменится с 25 на 30, остальные поля останутся прежними
  // const updatedData = syncObjects(serverData, localData);
  // console.log(updatedData); // { id: 1, name: "John", age: 30, city: "New York" }

  const handlePlus = async () => {
    try {
      // Обновляем количество на сервере и в состоянии
      //
      await updateBasketItem(item, { quantity: item.quantity + 1 }, setBasketItems);
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  return (
    <button
      onClick={handlePlus}
      className="bg-primary text-base-100 text-xl 
        rounded-full w-6 h-6 p-0.5 cursor-pointer 
        hover:bg-primary/80 transition-all flex items-center justify-center"
      title="Увеличить количество"
    >
      <RxPlus />
    </button>
  );
};

export default ButtonPlus;
