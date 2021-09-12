#Variables initialization

###
# Core
###

rg_infr_name = "infr-jdld-noprd-rg1"

###
# Log & Certificate
###

log_analytics_workspace = {
  name = "demoaxp10sdbxlogmon1" #The log analytics workspace name must be unique
  sku  = "PerGB2018"           #Refer to https://azure.microsoft.com/pricing/details/monitor/ for log analytics pricing 

  solutions = [{
    name      = "ContainerInsights"
    publisher = "Microsoft"
    product   = "OMSGallery/ContainerInsights"
  }]
}

key_vault = {
  name = "atulkv-autot8" #The kay vault name must be unique
  sku  = "standard"
}

###
# AKS
###
kubernetes_cluster = {
  name       = "aks-demo-axp10"
  dns_prefix = "aksdemoaxp10" #Please see https://aka.ms/aks-naming-rules
}
