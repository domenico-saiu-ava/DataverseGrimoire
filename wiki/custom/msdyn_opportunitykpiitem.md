---
logical: "msdyn_opportunitykpiitem"
display: "Elemento KPI opportunità"
entitySetName: "msdyn_opportunitykpiitems"
primaryId: "msdyn_opportunitykpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento KPI opportunità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunitykpiitem` |
| Display name | Elemento KPI opportunità |
| Display (plural) | Elementi KPI opportunità |
| Schema name | `msdyn_opportunitykpiitem` |
| Entity set (Web API) | `msdyn_opportunitykpiitems` |
| Primary id attribute | `msdyn_opportunitykpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunitykpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
POST /api/data/v9.2/msdyn_opportunitykpiitems
PATCH /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
```

## Attributes

Writable: **42** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_lastactivitybyteam`, `msdyn_lastactivitydirection`, `msdyn_lastactivityid`, `msdyn_lastactivitytype`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_nextactivitybyteam`, `msdyn_nextactivitydirection`, `msdyn_nextactivityid`, `msdyn_nextactivitytype`, `msdyn_openedemails`, `msdyn_opportunityid`, `msdyn_opportunitykpiitemid`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunitykpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunitykpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunitykpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunitykpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_opportunitykpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid` | [opportunity](opportunity.md) | `msdyn_opportunityid` | `msdyn_opportunityid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunitykpiitem_SyncErrors` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_AsyncOperations` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_MailboxTrackingFolders` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_UserEntityInstanceDatas` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `objectid` | `objectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_ProcessSession` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_BulkDeleteFailures` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitykpiitem` |
| `msdyn_opportunitykpiitem_PrincipalObjectAttributeAccesses` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `objectid` | `objectid_msdyn_opportunitykpiitem` |
| `msdyn_msdyn_opportunitykpiitem_opportunity_opportunitykpiid` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `msdyn_opportunitykpiid` | `msdyn_opportunitykpiid` |


## Source

Generated from [msdyn_opportunitykpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunitykpiitem')) on 2026-05-07.