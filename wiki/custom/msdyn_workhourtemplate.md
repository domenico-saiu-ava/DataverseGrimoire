---
logical: "msdyn_workhourtemplate"
display: "Modello di lavoro"
entitySetName: "msdyn_workhourtemplates"
primaryId: "msdyn_workhourtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di lavoro

Modello in cui le ore lavorative della risorsa possono essere salvate e riutilizzate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workhourtemplate` |
| Display name | Modello di lavoro |
| Display (plural) | Modelli di lavoro |
| Schema name | `msdyn_workhourtemplate` |
| Entity set (Web API) | `msdyn_workhourtemplates` |
| Primary id attribute | `msdyn_workhourtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workhourtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_workhourtemplates(<guid>)
POST /api/data/v9.2/msdyn_workhourtemplates
PATCH /api/data/v9.2/msdyn_workhourtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_workhourtemplates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookableresourceid`, `msdyn_calendarid`, `msdyn_description`, `msdyn_name`, `msdyn_workhourtemplateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresource_msdyn_workhourtemplate_bookableresourceid` | [bookableresource](bookableresource.md) | `msdyn_bookableresourceid` | `msdyn_bookableresourceid` |
| `lk_msdyn_workhourtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workhourtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workhourtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workhourtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_workhourtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_workhourtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_workhourtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_workhourtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workhourtemplate_DuplicateMatchingRecord` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_DuplicateBaseRecord` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `baserecordid` | `baserecordid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_SyncErrors` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_AsyncOperations` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_MailboxTrackingFolders` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_UserEntityInstanceDatas` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `objectid` | `objectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_ProcessSession` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_BulkDeleteFailures` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_PrincipalObjectAttributeAccesses` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `objectid` | `objectid_msdyn_workhourtemplate` |
| `msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate` | [msdyn_workhourtemplate](msdyn_workhourtemplate.md) | `msdyn_workhourtemplate` | `msdyn_workhourtemplate` |


## Source

Generated from [msdyn_workhourtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workhourtemplate')) on 2026-05-07.