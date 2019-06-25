@admin
    <nav class="topbar flex justify-between py-4 px-8 bg-white">
        <section class="topbar-desk w-1/3">
            {!! Form::open(['route' => 'desk', 'class' => 'flex items-center']) !!}
                @svg('search', 'w-4 flex-shrink-0')

                <label for="search" class="screen-reader">
                    Search for resource or user
                </label>

                {!! Form::text('search', $search ?? null, ['class' => 'field mb-0 bg-transparent border-transparent text-sm focus:border-transparent', 'placeholder' => 'Search resource or user...']) !!}
                {!! Form::submit('Search', ['class' => 'btn btn-primary screen-reader']) !!}
            {!! Form::close() !!}
        </section>

        <topbar-impersonation class="topbar-impersonation w-1/3">
            {!! Form::open(['route' => 'impersonation', 'class' => 'flex items-center']) !!}
                @svg('view-show', 'w-4 flex-shrink-0')

                <label for="user_id" class="screen-reader">
                    Select user to impersonate
                </label>

                {!! Form::select('user_id', \Hydrofon\User::pluck('name', 'id'), session()->get('impersonate', null), ['class' => 'field mb-0 bg-transparent border-transparent text-sm focus:border-transparent', 'placeholder' => 'Impersonate user...']) !!}
                {!! Form::submit('Impersonate', ['class' => 'btn btn-primary screen-reader']) !!}
            {!! Form::close() !!}
        </topbar-impersonation>
    </nav>
@endadmin