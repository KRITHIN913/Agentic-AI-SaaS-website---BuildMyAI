import { type LightbulbIcon as LucideProps, Moon, SunMedium, type LucideIcon } from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m11.572 0 4.818 2.902 4.818-2.902L16.39 8.097l4.818 2.903-4.818 2.902L21.208 24l-4.818-2.902L11.572 24l4.818-10.098L11.572 11l-4.818 2.902L11.572 24 6.754 21.098 1.936 24l4.818-10.098L1.936 11l4.818-2.902L1.936 0l4.818 2.902z"
      />
    </svg>
  ),
}
