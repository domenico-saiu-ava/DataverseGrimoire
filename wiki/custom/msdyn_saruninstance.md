---
logical: "msdyn_saruninstance"
display: "SARunInstance"
entitySetName: "msdyn_saruninstances"
primaryId: "msdyn_saruninstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SARunInstance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_saruninstance` |
| Display name | SARunInstance |
| Display (plural) | SARunInstances |
| Schema name | `msdyn_saruninstance` |
| Entity set (Web API) | `msdyn_saruninstances` |
| Primary id attribute | `msdyn_saruninstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_saruninstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_saruninstances(<guid>)
POST /api/data/v9.2/msdyn_saruninstances
PATCH /api/data/v9.2/msdyn_saruninstances(<guid>)
DELETE /api/data/v9.2/msdyn_saruninstances(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_endtime`, `msdyn_entityname`, `msdyn_instancetype`, `msdyn_name`, `msdyn_recordids`, `msdyn_recordsfailedcount`, `msdyn_recordssuccededcount`, `msdyn_saruninstanceid`, `msdyn_segmentid`, `msdyn_starttime`, `msdyn_totalrecords`, `msdyn_triggertype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_saruninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_saruninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_saruninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_saruninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_saruninstance` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_segment_msdyn_saruninstance` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_SegmentId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_saruninstance_SyncErrors` | [msdyn_saruninstance](msdyn_saruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_saruninstance` |
| `msdyn_saruninstance_DuplicateMatchingRecord` | [msdyn_saruninstance](msdyn_saruninstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_saruninstance` |
| `msdyn_saruninstance_DuplicateBaseRecord` | [msdyn_saruninstance](msdyn_saruninstance.md) | `baserecordid` | `baserecordid_msdyn_saruninstance` |
| `msdyn_saruninstance_AsyncOperations` | [msdyn_saruninstance](msdyn_saruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_saruninstance` |
| `msdyn_saruninstance_MailboxTrackingFolders` | [msdyn_saruninstance](msdyn_saruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_saruninstance` |
| `msdyn_saruninstance_UserEntityInstanceDatas` | [msdyn_saruninstance](msdyn_saruninstance.md) | `objectid` | `objectid_msdyn_saruninstance` |
| `msdyn_saruninstance_ProcessSession` | [msdyn_saruninstance](msdyn_saruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_saruninstance` |
| `msdyn_saruninstance_BulkDeleteFailures` | [msdyn_saruninstance](msdyn_saruninstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_saruninstance` |
| `msdyn_saruninstance_PrincipalObjectAttributeAccesses` | [msdyn_saruninstance](msdyn_saruninstance.md) | `objectid` | `objectid_msdyn_saruninstance` |
| `msdyn_msdyn_saruninstance_msdyn_sabatchinstance` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_SARunInstanceId` |
| `msdyn_msdyn_saruninstance_msdyn_salesroutingrun_saruninstanceid` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_saruninstanceid` |


## Source

Generated from [msdyn_saruninstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_saruninstance')) on 2026-05-07.