
# Spinner Component

This Component manages the life of a spinner through a boolean.
If the boolean is true, the spinner will show, otherwise it doesn't appear.

This was made using a library named cssLoaders. Link: https://cssloaders.github.io/

## Usage/Examples

### 1. Import the module
```typescript
import { SharedModule } from '../../shared/shared.module';
```
### 2. Declare a boolean property on the ts file.
```typescript
public loading: boolean = false;

```
### 3. Add the Html on the View's component.

```html
<div *ngIf="loading">
    <app-spinner></app-spinner>
</div>
```




