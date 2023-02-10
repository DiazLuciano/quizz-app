export type SizeType = 'small' | 'medium' | 'large' | 'big'

export const SIZE: Map<SizeType, string> = new Map<SizeType, string>(
  [
    ['small', '0.5rem'],
    ['medium', '5.5rem'],
    ['large', '2.0rem'],
    ['big', '3rem'],
  ]
)
