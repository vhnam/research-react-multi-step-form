/**
 * @package    Radiobox-Value
 * @author     Tommy Marshall <tommy.marshall@viget.com>
 * @copyright  2015 Tommy Marshall
 */

const getRadioOrCheckboxValue = (element) => {
  var values = [];

  if (!element) return null;

  if (typeof element.length == 'undefined')
    return element.checked ? element.value : null;

  for (var i = 0; i < element.length; i++) {
    element[i].checked && values.push(element[i].value);
  }

  return values;
};

export default getRadioOrCheckboxValue;
