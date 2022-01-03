export function getNestedValue(
	nestingKey: string,
	obj: { [x: string]: any },
	defaultValue: any
): any {
	if (!nestingKey || obj == null || Object.keys(obj).length === 0) {
		return "";
	}
	const keySegments = nestingKey.split(".");
	var firstKey = keySegments[0];
	keySegments.shift();
	if (obj[firstKey] && keySegments.length > 0) {
		var newKey = keySegments.join(".");
		return getNestedValue(newKey, obj[firstKey], defaultValue);
	} else if (obj[firstKey] && keySegments.length === 0) {
		return obj[firstKey];
	} else {
		return defaultValue;
	}
}
