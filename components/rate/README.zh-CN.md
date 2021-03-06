# Rate 评分

### 引入

```js
import { Rate } from '@trillion/rate';
```

## 代码演示

### 基础用法

```js
const [basic, setBasic] = React.useState(3);
```
```html
<Rate value={basic} onChange={setBasic} />
```

### 自定义图标

```js
const [customIcon, setCustomIcon] = React.useState(3);
```
```html
<Rate value={customIcon} onChange={setCustomIcon} icon='like' voidIcon="like-o"/>
```

### 自定义样式

```js
const [customStyle, setCustomStyle] = React.useState(3);
```
```html
<Rate value={customStyle} onChange={setCustomStyle} color='#ffd21e' voidColor="#eee" voidIcon='star' />
```

### 半星

```js
const [halfStar, setHalfStar] = React.useState(3.5);
```
```html
<Rate value={halfStar} onChange={setHalfStar} allowHalf={true} />
```

### 自定义数量

```js
const [customCount, setCustomCount] = React.useState(3);
```
```html
<Rate value={customCount} onChange={setCustomCount} count={6} />
```

### 禁用状态

```html
<Rate value={3} disabled={true} />
```

### 只读状态 

```html
<Rate value={3} readonly={true} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前分值 | number | - |
| count | 图标总数 | number | 5 |
| size | 图标大小，默认单位为`px` | number | 20px |
| gutter | 图标间距，默认单位为`px` | number | 4px |
| color | 选中时的颜色 | string | `#ee0a24` |
| voidColor | 未选中时的颜色 | string | `#c8c9cc` |
| disabledColor | 禁用时的颜色 | string | `#c8c9cc` |
| icon | 选中时的[图标名称](#/zh-CN/icon)或图片链接 | string | star |
| voidIcon | 未选中时的[图标名称](#/zh-CN/icon)或图片链接 | string | star-0 |
| allowHalf | 是否允许半选 | boolean | false |
| readonly | 是否为只读状态 | boolean | false |
| disabled | 是否禁用评分 | boolean | false |
| touchable | 是否可以通过滑动手势选择评分 | boolean | true |
| onChange | 当前分值变化时触发的事件 | (event) => void |
