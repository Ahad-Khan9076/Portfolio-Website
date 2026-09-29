import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { primaryCta } from '@/components/navigation/navItems'
import { footerNavLinks } from '@/data/footerLinks'
import { siteConfig } from '@/data/site'
import { socialLinks } from '@/data/socialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-brand-black/10 bg-brand-black text-brand-white">
      <div className="container-site section-padding !py-12 md:!py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="inline-flex flex-col w-fit">
              <span className="text-xl font-extrabold tracking-tight">
                {siteConfig.name}
              </span>
              <span className="mt-1 text-sm text-gray-400">
                Founder @ {siteConfig.founderOf}
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              {siteConfig.role}
            </p>
            <Button
              to={primaryCta.to}
              size="sm"
              className="mt-2 w-fit uppercase tracking-[0.08em] text-[0.7rem]"
            >
              {primaryCta.label}
            </Button>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Links
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer">
              {footerNavLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-gray-300 transition-colors hover:text-brand-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Social
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) =>
                link.isPlaceholder ? (
                  <span
                    key={link.id}
                    className="text-sm text-gray-500"
                    title="Link pending verification"
                  >
                    {link.label}
                  </span>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              {siteConfig.headline}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Client acquisition systems for freelancers & agencies.
          </p>
        </div>
      </div>
    </footer>
  )
}
