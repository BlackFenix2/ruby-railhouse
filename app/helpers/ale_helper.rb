# helper
module AleHelper
  def default_meta_tags
    {
      site: 'Ruby Railhouse',
      description: 'Take a stop off the Rails track and enjoy a ale.',
      separator: '|',
      keywords: 'Site, Ruby, Rails, Railhouse, Alehouse, Ruby on Rails, Ruby Railhouse',
      canonical: request.original_url,
      icon: [
        { href: image_url('favicon.ico') }

      ],
      og: {
        site_name: 'Ruby Railhouse',
        title: 'Ruby Railhouse',
        description: 'Take a stop off the Rails track and enjoy a ale.',
        type: 'website',
        url: request.original_url,
        image: image_url('banner.jpg')
      }
    }
  end
end
