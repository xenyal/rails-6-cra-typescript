Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'static', to: 'static#index'
    end
  end

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
