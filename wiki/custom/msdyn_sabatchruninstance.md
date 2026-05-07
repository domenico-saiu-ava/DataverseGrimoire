---
logical: "msdyn_sabatchruninstance"
display: "SABatchRunInstance"
entitySetName: "msdyn_sabatchruninstances"
primaryId: "msdyn_sabatchruninstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SABatchRunInstance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sabatchruninstance` |
| Display name | SABatchRunInstance |
| Display (plural) | SABatchRunInstances |
| Schema name | `msdyn_sabatchruninstance` |
| Entity set (Web API) | `msdyn_sabatchruninstances` |
| Primary id attribute | `msdyn_sabatchruninstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sabatchruninstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
POST /api/data/v9.2/msdyn_sabatchruninstances
PATCH /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
DELETE /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_runinfo`, `msdyn_sabatchruninstanceid`, `msdyn_saruninstanceid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sabatchruninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sabatchruninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sabatchruninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sabatchruninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sabatchruninstance` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_saruninstance_msdyn_sabatchinstance` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_SARunInstanceId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sabatchruninstance_SyncErrors` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_DuplicateMatchingRecord` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_DuplicateBaseRecord` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `baserecordid` | `baserecordid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_AsyncOperations` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_MailboxTrackingFolders` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_UserEntityInstanceDatas` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `objectid` | `objectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_ProcessSession` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_BulkDeleteFailures` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabatchruninstance` |
| `msdyn_sabatchruninstance_PrincipalObjectAttributeAccesses` | [msdyn_sabatchruninstance](msdyn_sabatchruninstance.md) | `objectid` | `objectid_msdyn_sabatchruninstance` |


## Source

Generated from [msdyn_sabatchruninstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sabatchruninstance')) on 2026-05-07.