export function byResourceId(elementType: string, resourceId: string): string {
  return `//${elementType}[@resource-id='${resourceId}']`;
}

export function byText(elementType: string, text: string): string {
  return `//${elementType}[@text='${text}']`;
}

export function byContentDesc(elementType: string, contentDesc: string): string {
  return `//${elementType}[@content-desc='${contentDesc}']`;
}

export function byPartialText(elementType: string, text: string): string {
  return `//${elementType}[contains(text(),'${text}')]`;
}
