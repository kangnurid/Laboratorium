import { navSections } from '../data/navigation'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-lg flex items-center gap-space-md border-b border-outline-variant/20 bg-surface-container-lowest shrink-0">
          <div className="h-9 w-9 rounded bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">science</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md tracking-tight text-primary leading-tight font-bold">SynthaLIMS</span>
            <span className="font-data-mono-sm text-data-mono-sm text-on-surface-variant uppercase tracking-wider">v3.42 &bull; Enterprise</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-sm py-space-md space-y-space-md">
          <nav className="space-y-space-md">
            {navSections.map((section) => (
              <div key={section.title} className="space-y-space-2xs">
                <div className="px-space-md py-space-xs font-label-caps text-label-caps uppercase text-on-surface-variant/70 tracking-wider">
                  {section.title}
                </div>
                {section.items.map((item) => (
                  <a
                    key={item.path}
                    href="#"
                    aria-current={item.active ? 'page' : undefined}
                    data-path={item.path}
                    onClick={(e) => e.preventDefault()}
                    className={
                      item.active
                        ? 'group flex items-center justify-between px-space-md py-space-xs rounded transition-colors bg-primary-container text-on-primary font-semibold shadow-sm'
                        : 'group flex items-center justify-between px-space-md py-space-xs rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors'
                    }
                  >
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-on-surface">
                        {item.icon}
                      </span>
                      <span className="font-body-md text-body-md">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`font-data-mono-sm text-data-mono-sm px-space-xs py-space-2xs rounded ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="p-space-md border-t border-outline-variant/20 bg-surface-container-low/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="font-data-mono-sm text-data-mono-sm text-on-surface-variant">Cleanroom Unit A</span>
          </div>
          <span className="font-data-mono-sm text-data-mono-sm text-secondary font-semibold">ONLINE</span>
        </div>
      </div>
    </aside>
  )
}
