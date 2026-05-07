---
logical: "owner"
display: "Owner"
entitySetName: "owners"
primaryId: "ownerid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Owner

Group of undeleted system users and undeleted teams. Owners can be used to control access to specific objects.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `owner` |
| Display name | Owner |
| Display (plural) | Owners |
| Schema name | `Owner` |
| Entity set (Web API) | `owners` |
| Primary id attribute | `ownerid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/owners?$select=name&$top=10
GET /api/data/v9.2/owners(<guid>)
POST /api/data/v9.2/owners
PATCH /api/data/v9.2/owners(<guid>)
DELETE /api/data/v9.2/owners(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`Name`, `OwnerIdType`, `VersionNumber`, `YomiName`

## Relationships


### One-to-Many (270)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActionCardUserState_Owner` | _n/a_ | `ownerid` | _n/a_ |
| `adx_inviteredemption_owner_ownerid` | _n/a_ | `ownerid` | _n/a_ |
| `adx_portalcomment_owner_ownerid` | _n/a_ | `ownerid` | _n/a_ |
| `chat_owner_ownerid` | _n/a_ | `ownerid` | _n/a_ |
| `owner_accounts` | _n/a_ | `ownerid` | _n/a_ |
| `owner_actioncards` | _n/a_ | `ownerid` | _n/a_ |
| `owner_activityfileattachment` | _n/a_ | `ownerid` | _n/a_ |
| `owner_activitypointers` | _n/a_ | `ownerid` | _n/a_ |
| `owner_adx_invitation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_adx_setting` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aiplugin` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginauth` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginconversationstarter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginconversationstartermapping` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginexternalschema` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginexternalschemaproperty` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aiplugingovernance` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aiplugingovernanceext` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aiplugininstance` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginoperation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginoperationparameter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginoperationresponsetemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_aipluginusersetting` | _n/a_ | `ownerid` | _n/a_ |
| `owner_annotations` | _n/a_ | `ownerid` | _n/a_ |
| `owner_appnotification` | _n/a_ | `ownerid` | _n/a_ |
| `owner_appointments` | _n/a_ | `ownerid` | _n/a_ |
| `owner_approvalprocess` | _n/a_ | `ownerid` | _n/a_ |
| `owner_approvalstageapproval` | _n/a_ | `ownerid` | _n/a_ |
| `owner_approvalstagecondition` | _n/a_ | `ownerid` | _n/a_ |
| `owner_approvalstageintelligent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_approvalstageorder` | _n/a_ | `ownerid` | _n/a_ |
| `owner_asyncoperations` | _n/a_ | `ownerid` | _n/a_ |
| `owner_bot` | _n/a_ | `ownerid` | _n/a_ |
| `owner_botcomponent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_botcomponentcollection` | _n/a_ | `ownerid` | _n/a_ |
| `owner_businessprocess` | _n/a_ | `ownerid` | _n/a_ |
| `owner_callbackregistration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_canvasapp` | _n/a_ | `ownerid` | _n/a_ |
| `owner_card` | _n/a_ | `ownerid` | _n/a_ |
| `owner_categories` | _n/a_ | `ownerid` | _n/a_ |
| `owner_certificatecredential` | _n/a_ | `ownerid` | _n/a_ |
| `owner_connectioninstance` | _n/a_ | `ownerid` | _n/a_ |
| `owner_connectionreference` | _n/a_ | `ownerid` | _n/a_ |
| `owner_connections` | _n/a_ | `ownerid` | _n/a_ |
| `owner_connector` | _n/a_ | `ownerid` | _n/a_ |
| `owner_contacts` | _n/a_ | `ownerid` | _n/a_ |
| `owner_conversationtranscript` | _n/a_ | `ownerid` | _n/a_ |
| `owner_copilotglossaryterm` | _n/a_ | `ownerid` | _n/a_ |
| `owner_copilotsynonyms` | _n/a_ | `ownerid` | _n/a_ |
| `owner_credential` | _n/a_ | `ownerid` | _n/a_ |
| `owner_customapi` | _n/a_ | `ownerid` | _n/a_ |
| `owner_datalakefolder` | _n/a_ | `ownerid` | _n/a_ |
| `owner_desktopflowbinary` | _n/a_ | `ownerid` | _n/a_ |
| `owner_desktopflowmodule` | _n/a_ | `ownerid` | _n/a_ |
| `owner_duplicaterules` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvfilesearch` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvfilesearchattribute` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvfilesearchentity` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvtablesearch` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvtablesearchattribute` | _n/a_ | `ownerid` | _n/a_ |
| `owner_dvtablesearchentity` | _n/a_ | `ownerid` | _n/a_ |
| `owner_emails` | _n/a_ | `ownerid` | _n/a_ |
| `owner_emailserverprofile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_environmentvariabledefinition` | _n/a_ | `ownerid` | _n/a_ |
| `owner_exchangesyncidmapping` | _n/a_ | `ownerid` | _n/a_ |
| `owner_exportedexcel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_exportsolutionupload` | _n/a_ | `ownerid` | _n/a_ |
| `owner_fabricaiskill` | _n/a_ | `ownerid` | _n/a_ |
| `owner_faxes` | _n/a_ | `ownerid` | _n/a_ |
| `owner_featurecontrolsetting` | _n/a_ | `ownerid` | _n/a_ |
| `owner_federatedknowledgeconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_federatedknowledgeentityconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_feedback` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowaggregation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowcapacityassignment` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowcredentialapplication` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowevent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowmachine` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowmachinegroup` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowmachineimage` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowmachineimageversion` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowmachinenetwork` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowrun` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowsession` | _n/a_ | `ownerid` | _n/a_ |
| `owner_flowsessionbinary` | _n/a_ | `ownerid` | _n/a_ |
| `owner_fxexpression` | _n/a_ | `ownerid` | _n/a_ |
| `owner_goal` | _n/a_ | `ownerid` | _n/a_ |
| `owner_goalrollupquery` | _n/a_ | `ownerid` | _n/a_ |
| `owner_governanceconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_importdatas` | _n/a_ | `ownerid` | _n/a_ |
| `owner_importfiles` | _n/a_ | `ownerid` | _n/a_ |
| `owner_importlogs` | _n/a_ | `ownerid` | _n/a_ |
| `owner_importmaps` | _n/a_ | `ownerid` | _n/a_ |
| `owner_imports` | _n/a_ | `ownerid` | _n/a_ |
| `owner_indexedtrait` | _n/a_ | `ownerid` | _n/a_ |
| `owner_interactionforemail` | _n/a_ | `ownerid` | _n/a_ |
| `owner_keyvaultreference` | _n/a_ | `ownerid` | _n/a_ |
| `owner_knowledgearticle` | _n/a_ | `ownerid` | _n/a_ |
| `owner_knowledgefaq` | _n/a_ | `ownerid` | _n/a_ |
| `owner_letters` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mailbox` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mailboxtrackingfolder` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mailmergetemplates` | _n/a_ | `ownerid` | _n/a_ |
| `owner_managedidentity` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mcpserver` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mcptool` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibdataset` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibdatasetfile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibdatasetrecord` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibdatasetscontainer` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibfeedbackloop` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibfile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aibfileattacheddata` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aidataprocessingevent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aidocumenttemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aievaluationconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aievaluationrun` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aievent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aifptrainingdocument` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aimodel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aiodimage` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aiodlabel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aiodtrainingboundingbox` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aiodtrainingimage` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitestcase` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitestcasedocument` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitestcaseinput` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitestrun` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_aitestrunbatch` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_analysiscomponent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_analysisjob` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_analysisoverride` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_analysisresult` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_analysisresultdetail` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_copilotinteractions` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_customcontrolextendedsettings` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dataflow` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dataflow_datalakefolder` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dataflowconnectionreference` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dataflowrefreshhistory` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dataflowtemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dmsrequest` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dmsrequeststatus` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dmssyncrequest` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_dmssyncstatus` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_entitylinkchatconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_entityrefreshhistory` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_favoriteknowledgearticle` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_federatedarticle` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_fileupload` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_actionapprovalmodel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_approval` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_approvalrequest` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_approvalresponse` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_approvalstep` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_awaitallactionapprovalmodel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_awaitallapprovalmodel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_basicapprovalmodel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_flow_flowapproval` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_formmapping` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_function` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_historicalcaseharvestbatch` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_historicalcaseharvestrun` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_integratedsearchprovider` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_kalanguagesetting` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_kbattachment` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_kmfederatedsearchconfig` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgearticleimage` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgearticletemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgeassetconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgeharvestjobrecord` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgeinteractioninsight` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgemanagementsetting` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgepersonalfilter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgesearchfilter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_knowledgesearchinsight` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_mobileapp` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmanalysishistory` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmbusinessruleautomationconfig` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmcalendar` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmcalendarversion` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pminferredtask` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmprocessextendedmetadataversion` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmprocesstemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmprocessusersettings` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmprocessversion` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmrecording` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmsimulation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmtab` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmtemplate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_pmview` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_qna` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_richtextfile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_salesforcestructuredobject` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_salesforcestructuredqnaconfig` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_schedule` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_serviceconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_slakpi` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_solutionhealthrule` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_solutionhealthruleargument` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdyn_virtualtablecolumncandidate` | _n/a_ | `ownerid` | _n/a_ |
| `owner_msdynce_botcontent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mspcat_catalogsubmissionfiles` | _n/a_ | `ownerid` | _n/a_ |
| `owner_mspcat_packagestore` | _n/a_ | `ownerid` | _n/a_ |
| `owner_nlsqregistration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_personaldocumenttemplates` | _n/a_ | `ownerid` | _n/a_ |
| `owner_phonecalls` | _n/a_ | `ownerid` | _n/a_ |
| `owner_plannerbusinessscenario` | _n/a_ | `ownerid` | _n/a_ |
| `owner_plannersyncaction` | _n/a_ | `ownerid` | _n/a_ |
| `owner_plugin` | _n/a_ | `ownerid` | _n/a_ |
| `owner_postfollows` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerbidataset` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerbidatasetapdx` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerbimashupparameter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerbireport` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerbireportapdx` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerfxrule` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagecomponent` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesddosalert` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesite` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesitelanguage` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesitepublished` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpageslog` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesmanagedidentity` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagesscanreport` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagessiteaifeedback` | _n/a_ | `ownerid` | _n/a_ |
| `owner_powerpagessourcefile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_privilegecheckerrun` | _n/a_ | `ownerid` | _n/a_ |
| `owner_processsessions` | _n/a_ | `ownerid` | _n/a_ |
| `owner_processstageparameter` | _n/a_ | `ownerid` | _n/a_ |
| `owner_queues` | _n/a_ | `ownerid` | _n/a_ |
| `owner_recentlyused` | _n/a_ | `ownerid` | _n/a_ |
| `owner_recurrencerules` | _n/a_ | `ownerid` | _n/a_ |
| `owner_recurringappointmentmasters` | _n/a_ | `ownerid` | _n/a_ |
| `owner_reports` | _n/a_ | `ownerid` | _n/a_ |
| `owner_retaineddataexcel` | _n/a_ | `ownerid` | _n/a_ |
| `owner_retentionconfig` | _n/a_ | `ownerid` | _n/a_ |
| `owner_retentionfailuredetail` | _n/a_ | `ownerid` | _n/a_ |
| `owner_retentionoperation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_retentionsuccessdetail` | _n/a_ | `ownerid` | _n/a_ |
| `owner_savingrule` | _n/a_ | `ownerid` | _n/a_ |
| `owner_sharepointdocumentlocation` | _n/a_ | `ownerid` | _n/a_ |
| `owner_sharepointsite` | _n/a_ | `ownerid` | _n/a_ |
| `owner_sideloadedaiplugin` | _n/a_ | `ownerid` | _n/a_ |
| `owner_signal` | _n/a_ | `ownerid` | _n/a_ |
| `owner_slas` | _n/a_ | `ownerid` | _n/a_ |
| `owner_socialactivities` | _n/a_ | `ownerid` | _n/a_ |
| `owner_SocialProfile` | _n/a_ | `ownerid` | _n/a_ |
| `owner_solutioncomponentbatchconfiguration` | _n/a_ | `ownerid` | _n/a_ |
| `owner_stagesolutionupload` | _n/a_ | `ownerid` | _n/a_ |
| `owner_synapsedatabase` | _n/a_ | `ownerid` | _n/a_ |
| `owner_SyncError` | _n/a_ | `ownerid` | _n/a_ |
| `owner_tag` | _n/a_ | `ownerid` | _n/a_ |
| `owner_taggedflowsession` | _n/a_ | `ownerid` | _n/a_ |
| `owner_taggedprocess` | _n/a_ | `ownerid` | _n/a_ |
| `owner_tasks` | _n/a_ | `ownerid` | _n/a_ |
| `owner_templates` | _n/a_ | `ownerid` | _n/a_ |
| `owner_trait` | _n/a_ | `ownerid` | _n/a_ |
| `owner_unstructuredfilesearchentity` | _n/a_ | `ownerid` | _n/a_ |
| `owner_unstructuredfilesearchrecord` | _n/a_ | `ownerid` | _n/a_ |
| `owner_userform` | _n/a_ | `ownerid` | _n/a_ |
| `owner_userquerys` | _n/a_ | `ownerid` | _n/a_ |
| `owner_userqueryvisualizations` | _n/a_ | `ownerid` | _n/a_ |
| `owner_workflowbinary` | _n/a_ | `ownerid` | _n/a_ |
| `owner_workflowmetadata` | _n/a_ | `ownerid` | _n/a_ |
| `owner_workflows` | _n/a_ | `ownerid` | _n/a_ |
| `owner_workqueue` | _n/a_ | `ownerid` | _n/a_ |
| `owner_workqueueitem` | _n/a_ | `ownerid` | _n/a_ |
| `slakpiinstance_owner` | _n/a_ | `ownerid` | _n/a_ |


## Source

Generated from [owner.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/owner.md) on 2026-05-06.