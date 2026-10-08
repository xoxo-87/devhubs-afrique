"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar35Props {
  className?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu: MenuItem[];
  auth: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const defaultProps: Navbar35Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu: [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth: {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
};

const Navbar35 = ({ className, ...props }: Partial<Navbar35Props>) => {
  const { logo, menu, auth } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("sticky top-0 z-50 border-b border-white/10 bg-background/80 py-4 backdrop-blur-xl", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="hidden grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 md:grid">
          <a
            href={logo.url}
            className="flex items-center gap-2 justify-self-start"
          >
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>
          <NavigationMenu className="min-w-0 justify-self-center">
            <NavigationMenuList className="gap-0">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-1 justify-self-end">
            <Button variant="ghost" size="sm" className="px-2 text-foreground hover:bg-transparent hover:text-foreground/80" render={<a href={auth.login.url} />} nativeButton={false}>{auth.login.title}</Button>
            <Button size="sm" className="bg-[#1d71b8] px-3 text-white hover:bg-[#185f9c]" render={<a href={auth.signup.url} />} nativeButton={false}>Rejoindre le Hub</Button>
          </div>
        </nav>

        <div className="block md:hidden">
          <div className="flex items-center justify-between gap-3">
            <a href={logo.url} className="inline-flex min-w-0 items-center">
              <img
                src={logo.src}
                className="max-h-8 w-auto dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Ouvrir le menu" className="h-10 w-10 rounded-xl border-white/10 bg-white/5 text-foreground shadow-none hover:bg-white/10" />}>
                <Menu className="size-5" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent side="right" className="h-dvh w-[min(88vw,24rem)] max-w-none border-l border-white/10 bg-slate-950 p-0">
                <SheetHeader className="border-b border-white/10 px-4 pb-4 pt-5">
                  <SheetTitle>
                    <div className="flex items-center">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Navigation principale" className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </div>
                </nav>
                <div className="mt-auto border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <Button className="h-12 w-full bg-[#1d71b8] text-base font-semibold text-white hover:bg-[#185f9c]" render={<a href={auth.signup.url} />} nativeButton={false}>Rejoindre le Hub</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} className="w-80" render={<SubMenuLink item={subItem} />}></NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 py-2 text-xs font-medium text-foreground transition-colors hover:bg-transparent hover:text-foreground/80 lg:px-3 lg:text-sm"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <div key={item.title} className="border-b border-white/10 py-1">
        <a href={item.url} className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-white/5">
          {item.title}
        </a>
        <div className="mb-2 ml-3 border-l border-white/10 pl-3">
          <div className="flex flex-col">
            {item.items.map((subItem) => (
              <a key={subItem.title} href={subItem.url} className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {subItem.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a key={item.title} href={item.url} className="block border-b border-white/10 rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/5">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar35 };
