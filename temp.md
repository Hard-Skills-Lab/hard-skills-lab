## src/components/SectionHeading.astro:

```
---
interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<div class="max-w-3xl mb-12">
  <h2 class="text-3xl md:text-4xl font-bold mb-4">
    {title}
  </h2>
  {subtitle && <p class="text-lg text-muted">{subtitle}</p>}
</div>
```

## src/components/PrimaryButton.astro:

```
---
interface Props {
  href: string;
  variant?: "primary" | "secondary";
  class?: string;
}

const { href, variant = "primary", class: className = "" } = Astro.props;

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 font-medium transition-colors";
const variants = {
  primary: "bg-orange text-white hover:bg-orange/90",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-white",
};
---

<a href={href} class={`${baseStyles} ${variants[variant]} ${className}`}>
  <slot />
</a>
```
