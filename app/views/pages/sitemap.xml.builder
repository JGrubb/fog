xml.instruct! :xml
xml.urlset :xmlns => "http://www.sitemaps.org/schemas/sitemap/0.9" do

  xml.url do
    xml.loc "http://www.fieldsofgreen.org"
    xml.lastmod (Date.today - 3).strftime("%Y-%m-%d")
    xml.changefreq "weekly"
    xml.priority "0.7"
  end

  xml.url do
    xml.loc "http://www.fieldsofgreen.org/events"
    xml.lastmod (Date.today - 1).strftime("%Y-%m-%d")
    xml.changefreq "weekly"
    xml.priority "0.7"
  end

  xml.url do
    xml.loc "http://www.fieldsofgreen.org/contact"
    xml.lastmod (Date.today - 1.month).strftime("%Y-%m-%d")
    xml.changefreq "monthly"
    xml.priority "0.5"
  end

  for post in @pages
    xml.url do
      xml.loc page_url(post)
      xml.lastmod post.updated_at.strftime("%Y-%m-%d")
      xml.changefreq "monthly"
      xml.priority "0.5"
    end
  end
  for post in @announcements
    xml.url do
      xml.loc announcement_url(post)
      xml.lastmod post.updated_at.strftime("%Y-%m-%d")
      xml.changefreq "monthly"
      xml.priority "0.5"
    end
  end
  for post in @teachers
    xml.url do
      xml.loc teacher_url(post)
      xml.lastmod post.updated_at.strftime("%Y-%m-%d")
      xml.changefreq "monthly"
      xml.priority "0.5"
    end
  end
end
