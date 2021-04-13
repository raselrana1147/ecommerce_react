<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <link rel="stylesheet" href="{{asset('public/assets/plugins/fontawesome-free/css/all.min.css')}}">
   
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/jqvmap/jqvmap.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/dist/css/adminlte.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/daterangepicker/daterangepicker.css') }}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/summernote/summernote-bs4.css') }}">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

  <link rel="stylesheet" href="{{asset('public/assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
  <link rel="stylesheet" href="{{asset('public/assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css')}}">

    <link href="{{ asset('public/css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('public/js/app.js') }}" defer></script>
</head>
<body>
  <div id="app">
      
  </div>
<script src="{{  asset('public/assets/plugins/jquery/jquery.min.js')}}"></script>
<script src="{{  asset('public/assets/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
    <script src="{{  asset('public/assets/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/chart.js/Chart.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/sparklines/sparkline.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/jqvmap/jquery.vmap.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/moment/moment.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/daterangepicker/daterangepicker.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/summernote/summernote-bs4.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
    <script src="{{  asset('public/assets/dist/js/adminlte.js')}}"></script>
    <script src="{{  asset('public/assets/dist/js/pages/dashboard.js')}}"></script>
    <script src="{{  asset('public/assets/dist/js/demo.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/datatables-responsive/js/dataTables.responsive.min.js')}}"></script>
    <script src="{{  asset('public/assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js')}}"></script> 
    <script src="{{  asset('public/custom/js/custom.js')}}"></script>  


</body>
</html>
