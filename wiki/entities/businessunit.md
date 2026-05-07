---
logical: "businessunit"
display: "Business Unit"
entitySetName: "businessunits"
primaryId: "businessunitid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
synonyms_it: ["unita organizzativa", "unita business", "divisione", "business unit"]
synonyms_en: ["business unit", "division", "businessunit"]
---

# Business Unit

Business, division, or department in the Microsoft Dynamics 365 database.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessunit` |
| Display name | Business Unit |
| Display (plural) | Business Units |
| Schema name | `BusinessUnit` |
| Entity set (Web API) | `businessunits` |
| Primary id attribute | `businessunitid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/businessunits?$select=name&$top=10
GET /api/data/v9.2/businessunits(<guid>)
POST /api/data/v9.2/businessunits
PATCH /api/data/v9.2/businessunits(<guid>)
DELETE /api/data/v9.2/businessunits(<guid>)
```

## Attributes

Writable: **64** · Read-only: **11**

### Writable

`Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `BusinessUnitId`, `CalendarId`, `CostCenter`, `CreditLimit`, `Description`, `DivisionName`, `EMailAddress`, `FileAsName`, `FtpSiteUrl`, `ImportSequenceNumber`, `InheritanceMask`, `IsDisabled`, `Name`, `OverriddenCreatedOn`, `ParentBusinessUnitId`, `Picture`, `StockExchange`, `TickerSymbol`, `TransactionCurrencyId`, `UTCOffset`, `WebSiteUrl`, `WorkflowSuspended`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DisabledReason`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `UserGroupId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_parent_business_unit` | [businessunit](businessunit.md) | `parentbusinessunitid` | `parentbusinessunitid` |
| `BusinessUnit_Calendar` | [calendar](calendar.md) | `calendarid` | `calendarid` |
| `lk_businessunit_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessunit_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_businessunitbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessunitbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_business_units` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_BusinessUnit` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (285)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_businessunit_owningbusinessunit` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `adx_portalcomment_businessunit_owningbusinessunit` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BulkDeleteOperation_BusinessUnit` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_accounts` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_actioncards` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_activityfileattachment` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_activitypointer` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_adx_invitation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_adx_setting` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aiplugin` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginauth` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginconversationstarter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginconversationstartermapping` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginexternalschema` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginexternalschemaproperty` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aiplugingovernance` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aiplugingovernanceext` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aiplugininstance` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginoperation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginoperationparameter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginoperationresponsetemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_aipluginusersetting` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_annotations` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_applicationuser` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_appnotification` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_appointment_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_approvalprocess` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_approvalstageapproval` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_approvalstagecondition` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_approvalstageintelligent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_approvalstageorder` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_asyncoperation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_bot` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_botcomponent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_botcomponentcollection` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_businessprocess` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_calendars` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_card` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_category` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_certificatecredential` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_connectioninstance` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_connectionreference` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_connections` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_connector` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_contacts` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_conversationtranscript` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_copilotglossaryterm` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_copilotsynonyms` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_credential` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_customapi` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_datalakefolder` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_desktopflowbinary` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_desktopflowmodule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvfilesearch` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvfilesearchattribute` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvfilesearchentity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvtablesearch` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvtablesearchattribute` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_dvtablesearchentity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_email_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_emailserverprofile` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_environmentvariabledefinition` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_exchangesyncidmapping` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_exportedexcel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_exportsolutionupload` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_fabricaiskill` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_fax_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_featurecontrolsetting` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_federatedknowledgeconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_federatedknowledgeentityconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_feedback` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowaggregation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowcapacityassignment` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowcredentialapplication` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowevent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowmachine` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowmachinegroup` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowmachineimage` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowmachineimageversion` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowmachinenetwork` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowrun` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowsession` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_flowsessionbinary` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_fxexpression` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_goal` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_goalrollupquery` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_governanceconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_indexedtrait` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_interactionforemail` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_keyvaultreference` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_knowledgearticle` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_knowledgefaq` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_letter_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mailbox` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mailmergetemplates` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_managedidentity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mcpserver` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mcptool` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibdataset` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibdatasetfile` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibdatasetrecord` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibdatasetscontainer` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibfeedbackloop` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibfile` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aibfileattacheddata` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aidataprocessingevent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aidocumenttemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aievaluationconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aievaluationrun` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aievent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aifptrainingdocument` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aimodel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aiodimage` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aiodlabel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aiodtrainingboundingbox` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aiodtrainingimage` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitestcase` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitestcasedocument` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitestcaseinput` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitestrun` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_aitestrunbatch` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_analysiscomponent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_analysisjob` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_analysisoverride` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_analysisresult` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_analysisresultdetail` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_copilotinteractions` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_customcontrolextendedsettings` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dataflow` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dataflow_datalakefolder` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dataflowconnectionreference` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dataflowrefreshhistory` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dataflowtemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dmsrequest` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dmsrequeststatus` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dmssyncrequest` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_dmssyncstatus` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_entitylinkchatconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_entityrefreshhistory` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_favoriteknowledgearticle` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_federatedarticle` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_fileupload` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_actionapprovalmodel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_approval` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_approvalrequest` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_approvalresponse` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_approvalstep` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_awaitallactionapprovalmodel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_awaitallapprovalmodel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_basicapprovalmodel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_flow_flowapproval` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_formmapping` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_function` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_historicalcaseharvestbatch` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_historicalcaseharvestrun` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_integratedsearchprovider` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_kalanguagesetting` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_kbattachment` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_kmfederatedsearchconfig` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgearticleimage` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgearticletemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgeassetconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgeharvestjobrecord` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgeinteractioninsight` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgemanagementsetting` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgepersonalfilter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgesearchfilter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_knowledgesearchinsight` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_mobileapp` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmanalysishistory` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmbusinessruleautomationconfig` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmcalendar` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmcalendarversion` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pminferredtask` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmprocessextendedmetadataversion` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmprocesstemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmprocessusersettings` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmprocessversion` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmrecording` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmsimulation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmtab` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmtemplate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_pmview` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_qna` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_richtextfile` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_salesforcestructuredobject` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_salesforcestructuredqnaconfig` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_schedule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_serviceconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_slakpi` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_solutionhealthrule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_solutionhealthruleargument` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdyn_virtualtablecolumncandidate` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_msdynce_botcontent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mspcat_catalogsubmissionfiles` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_mspcat_packagestore` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_nlsqregistration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_parent_business_unit` | _n/a_ | `parentbusinessunitid` | _n/a_ |
| `business_unit_personaldocumenttemplates` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_phone_call_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_plannerbusinessscenario` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_plannersyncaction` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_plugin` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_postfollows` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_PostRegarding` | _n/a_ | `regardingobjectowningbusinessunit` | _n/a_ |
| `business_unit_powerbidataset` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerbidatasetapdx` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerbimashupparameter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerbireport` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerbireportapdx` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerfxrule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagecomponent` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesddosalert` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesite` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesitelanguage` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesitepublished` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpageslog` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesmanagedidentity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagesscanreport` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagessiteaifeedback` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_powerpagessourcefile` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_privilegecheckerrun` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_processstageparameter` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_queues` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_queues2` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_recentlyused` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_recurrencerule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_recurringappointmentmaster_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_reports` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_retaineddataexcel` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_retentionconfig` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_retentionfailuredetail` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_retentionoperation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_retentionsuccessdetail` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_roles` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_savingrule` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_sharepointdocumentlocation` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_sharepointsites` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_sideloadedaiplugin` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_signal` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_slabase` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_slakpiinstance` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_socialactivity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_socialprofiles` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_solutioncomponentbatchconfiguration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_stagesolutionupload` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_synapsedatabase` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_system_users` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_tag` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_taggedflowsession` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_taggedprocess` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_task_activities` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_teams` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_templates` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_trait` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_unstructuredfilesearchentity` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_unstructuredfilesearchrecord` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_user_settings` | _n/a_ | `businessunitid` | _n/a_ |
| `business_unit_userform` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_userquery` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_userqueryvisualizations` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workflow` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workflowbinary` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workflowlogs` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workflowmetadata` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workqueue` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `business_unit_workqueueitem` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BusinessUnit_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `businessunit_callbackregistration` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `businessunit_canvasapp` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_DuplicateRules` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_ImportData` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_ImportFiles` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_ImportLogs` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_ImportMaps` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_Imports` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `businessunit_mailboxtrackingfolder` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `businessunit_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `BusinessUnit_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BusinessUnit_SyncError` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `BusinessUnit_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_businessunit_owningbusinessunit` | _n/a_ | `owningbusinessunit` | _n/a_ |
| `Owning_businessunit_processsessions` | _n/a_ | `owningbusinessunit` | _n/a_ |


## Source

Generated from [businessunit.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/businessunit.md) on 2026-05-06.