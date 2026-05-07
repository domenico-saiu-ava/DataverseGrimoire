---
logical: "msdynmkt_metadataitem"
display: "Elemento metadati"
entitySetName: "msdynmkt_metadataitems"
primaryId: "msdynmkt_metadataitemid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento metadati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadataitem` |
| Display name | Elemento metadati |
| Display (plural) | Elementi metadati |
| Schema name | `msdynmkt_metadataitem` |
| Entity set (Web API) | `msdynmkt_metadataitems` |
| Primary id attribute | `msdynmkt_metadataitemid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadataitems?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadataitems(<guid>)
POST /api/data/v9.2/msdynmkt_metadataitems
PATCH /api/data/v9.2/msdynmkt_metadataitems(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadataitems(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_datatype`, `msdynmkt_datetimebehavior`, `msdynmkt_displayname`, `msdynmkt_fullmetadataasjson`, `msdynmkt_iconpath`, `msdynmkt_isrequired`, `msdynmkt_issecured`, `msdynmkt_languagecode`, `msdynmkt_logicalname`, `msdynmkt_metadataitemid`, `msdynmkt_name`, `msdynmkt_nativeid`, `msdynmkt_navigationpathsasjson`, `msdynmkt_referencedsourcesasjson`, `msdynmkt_sourcedisplayname`, `msdynmkt_sourceisvirtual`, `msdynmkt_sourcelogicalname`, `msdynmkt_sourceprimaryid`, `msdynmkt_sourcesetname`, `msdynmkt_sourcetype`, `msdynmkt_sourcevirtualtabletype`, `msdynmkt_stringformattype`, `msdynmkt_targetaudienceasjson`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_metadataitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadataitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadataitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadataitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_metadataitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_metadataitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_metadataitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_metadataitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadataitem_SyncErrors` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_DuplicateMatchingRecord` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_DuplicateBaseRecord` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `baserecordid` | `baserecordid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_AsyncOperations` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_MailboxTrackingFolders` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_UserEntityInstanceDatas` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `objectid` | `objectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_ProcessSession` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_BulkDeleteFailures` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataitem` |
| `msdynmkt_metadataitem_PrincipalObjectAttributeAccesses` | [msdynmkt_metadataitem](msdynmkt_metadataitem.md) | `objectid` | `objectid_msdynmkt_metadataitem` |


## Source

Generated from [msdynmkt_metadataitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_metadataitem')) on 2026-05-07.