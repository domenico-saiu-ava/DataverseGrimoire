---
logical: "msdyn_salesroutingrun"
display: "Esecuzione distribuzione vendite"
entitySetName: "msdyn_salesroutingruns"
primaryId: "msdyn_salesroutingrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione distribuzione vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesroutingrun` |
| Display name | Esecuzione distribuzione vendite |
| Display (plural) | Esecuzioni distribuzione Sales |
| Schema name | `msdyn_salesroutingrun` |
| Entity set (Web API) | `msdyn_salesroutingruns` |
| Primary id attribute | `msdyn_salesroutingrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesroutingruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesroutingruns(<guid>)
POST /api/data/v9.2/msdyn_salesroutingruns
PATCH /api/data/v9.2/msdyn_salesroutingruns(<guid>)
DELETE /api/data/v9.2/msdyn_salesroutingruns(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assignmentruleid`, `msdyn_connectedsequenceids`, `msdyn_connectsequencestatus`, `msdyn_errormessage`, `msdyn_isrecordassigned`, `msdyn_name`, `msdyn_ownerassigned`, `msdyn_previousowner`, `msdyn_previoussegmentid`, `msdyn_routingrequestsource`, `msdyn_routingstatus`, `msdyn_salesroutingrunid`, `msdyn_saruninstanceid`, `msdyn_segmentationstatus`, `msdyn_segmentid`, `msdyn_targetobject`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesroutingrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesroutingrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesroutingrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesroutingrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesroutingrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesroutingrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesroutingrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesroutingrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |
| `msdyn_lead_msdyn_salesroutingrun_targetobject` | [lead](lead.md) | `msdyn_targetobject` | `msdyn_targetobject_lead` |
| `msdyn_opportunity_msdyn_salesroutingrun_targetobject` | [opportunity](opportunity.md) | `msdyn_targetobject` | `msdyn_targetobject_opportunity` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `msdyn_systemuser_msdyn_salesroutingrun_ownerassigned` | [systemuser](systemuser.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_systemuser` |
| `msdyn_team_msdyn_salesroutingrun_ownerassigned` | [team](team.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_team` |
| `msdyn_systemuser_msdyn_salesroutingrun_previousowner` | [systemuser](systemuser.md) | `msdyn_previousowner` | `msdyn_previousowner_systemuser` |
| `msdyn_team_msdyn_salesroutingrun_previousowner` | [team](team.md) | `msdyn_previousowner` | `msdyn_previousowner_team` |
| `msdyn_queue_msdyn_salesroutingrun_previousowner` | [queue](queue.md) | `msdyn_previousowner` | `msdyn_previousowner_queue` |
| `msdyn_queue_msdyn_salesroutingrun_ownerassigned` | [queue](queue.md) | `msdyn_ownerassigned` | `msdyn_ownerassigned_queue` |
| `msdyn_msdyn_segment_msdyn_salesroutingrun_previoussegmentid` | [msdyn_segment](msdyn_segment.md) | `msdyn_previoussegmentid` | `msdyn_previoussegmentid` |
| `msdyn_msdyn_saruninstance_msdyn_salesroutingrun_saruninstanceid` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_saruninstanceid` |
| `msdyn_account_msdyn_salesroutingrun_targetobject` | [account](account.md) | `msdyn_targetobject` | `msdyn_targetobject_account` |
| `msdyn_contact_msdyn_salesroutingrun_targetobject` | [contact](contact.md) | `msdyn_targetobject` | `msdyn_targetobject_contact` |
| `msdyn_salessuggestion_msdyn_salesroutingrun_targetobject` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_salessuggestion` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesroutingrun_SyncErrors` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_DuplicateMatchingRecord` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_DuplicateBaseRecord` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `baserecordid` | `baserecordid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_AsyncOperations` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_MailboxTrackingFolders` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_UserEntityInstanceDatas` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `objectid` | `objectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_ProcessSession` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_BulkDeleteFailures` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingrun` |
| `msdyn_salesroutingrun_PrincipalObjectAttributeAccesses` | [msdyn_salesroutingrun](msdyn_salesroutingrun.md) | `objectid` | `objectid_msdyn_salesroutingrun` |


## Source

Generated from [msdyn_salesroutingrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesroutingrun')) on 2026-05-07.