---
logical: "msdyn_region"
display: "Area geografica"
entitySetName: "msdyn_regions"
primaryId: "msdyn_regionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area geografica

Questa entità viene usata per identificare l'area geografica dei clienti finali. Gli utenti e i gruppi di utenti vengono decorati con l'area geografica e abbinati alle conversazioni per instradarli. La decorazione di utenti e gruppi di utenti supporta anche la gerarchia. 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_region` |
| Display name | Area geografica |
| Display (plural) | Aree geografiche |
| Schema name | `msdyn_region` |
| Entity set (Web API) | `msdyn_regions` |
| Primary id attribute | `msdyn_regionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_regions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_regions(<guid>)
POST /api/data/v9.2/msdyn_regions
PATCH /api/data/v9.2/msdyn_regions(<guid>)
DELETE /api/data/v9.2/msdyn_regions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_parentregionid`, `msdyn_regioncode`, `msdyn_regionid`, `msdyn_regionname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_region_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_region_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_region_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_region_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_region` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_region` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_region` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_region` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_region_parentregionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_parentregionid` | `msdyn_parentregionid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_region_SyncErrors` | [msdyn_region](msdyn_region.md) | `regardingobjectid` | `regardingobjectid_msdyn_region` |
| `msdyn_region_DuplicateMatchingRecord` | [msdyn_region](msdyn_region.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_region` |
| `msdyn_region_DuplicateBaseRecord` | [msdyn_region](msdyn_region.md) | `baserecordid` | `baserecordid_msdyn_region` |
| `msdyn_region_AsyncOperations` | [msdyn_region](msdyn_region.md) | `regardingobjectid` | `regardingobjectid_msdyn_region` |
| `msdyn_region_MailboxTrackingFolders` | [msdyn_region](msdyn_region.md) | `regardingobjectid` | `regardingobjectid_msdyn_region` |
| `msdyn_region_UserEntityInstanceDatas` | [msdyn_region](msdyn_region.md) | `objectid` | `objectid_msdyn_region` |
| `msdyn_region_ProcessSession` | [msdyn_region](msdyn_region.md) | `regardingobjectid` | `regardingobjectid_msdyn_region` |
| `msdyn_region_BulkDeleteFailures` | [msdyn_region](msdyn_region.md) | `regardingobjectid` | `regardingobjectid_msdyn_region` |
| `msdyn_region_PrincipalObjectAttributeAccesses` | [msdyn_region](msdyn_region.md) | `objectid` | `objectid_msdyn_region` |
| `msdyn_agentgroupregion_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid` |
| `msdyn_agentregion_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid` |
| `msdyn_ocliveworkitem_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid_msdyn_ocliveworkitem` |
| `msdyn_region_parentregionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_parentregionid` | `msdyn_parentregionid` |


## Source

Generated from [msdyn_region (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_region')) on 2026-05-07.